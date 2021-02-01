import {
  JobsOptions,
  Queue,
  QueueOptions,
  QueueScheduler,
  RedisOptions,
  Worker,
} from 'bullmq';

import * as Jobs from '../jobs';
import { constants, logger } from '../utils/globalMethods';

const redisOptions: RedisOptions = {
  host: 'localhost',
  port: 6379,
};

const options: QueueOptions | WorkerOptions = {
  connection: { ...redisOptions },
};

const getQueueData = (job: any) => {
  const {
    active = true,
    config,
    data,
    handle,
    name,
    queued = false,
    selfRegister = false,
  }: any = job;
  const bull = new Queue(name, options);

  if (selfRegister || (queued && active)) {
    // eslint-disable-next-line no-new
    new QueueScheduler(name, options);
    bull.add(name, data, config);
  }

  return {
    active,
    bull,
    handle,
    name,
  };
};

interface QueueInterface {
  active: boolean;
  bull: Queue;
  handle(): any;
  name: string;
}

const queues: QueueInterface[] = [];

Object.values(Jobs).map((job) => {
  if (Array.isArray(job)) {
    return job.forEach((jobData) => {
      queues.push(getQueueData(jobData));
    });
  }
  queues.push(getQueueData(job));
});

export default {
  add(name: string, data?: any, options?: JobsOptions): any {
    const queue = this.queues.find((queue) => queue.name === name);
    if (queue) {
      queue.bull.add(name, data, options);
      logger.info(`Job: ${name} added to Queue`);
      return queue;
    }
    logger.warn(`Job: [${name}] wasn't found, and nothing was add to Queue`);
    return new Error(constants.JOB_NOT_FOUND(name));
  },
  process(): void {
    logger.debug('Queue Process initialized');

    for (const queue of this.queues) {
      const { active, name } = queue;
      if (active) {
        const worker = new Worker(name, queue.handle, options as any);

        worker.on('completed', () => {
          logger.info(`[${name}] | [COMPLETED]`);
        });

        worker.on('failed', (_, err) => {
          logger.error(`[${name}] | [FAILED] -> ${err.message}`);
        });
      }
    }
  },
  queues,
};
