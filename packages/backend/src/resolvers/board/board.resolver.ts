import { Resolver } from 'type-graphql';

import { Board } from '../../entity/Board';
import { createBaseResolver } from '../../utils/createBaseResolver';
import { slugify } from '../../utils/globalMethods';
import { CreateBoardInput, FilterBoardInput, UpdateBoardInput } from './Inputs';

const Inputs = {
  create: CreateBoardInput,
  filter: FilterBoardInput,
  update: UpdateBoardInput,
};

function slugMiddleware(_: Board, data: Board) {
  data.topics.forEach((topic) => {
    topic.slug = slugify(topic.name);
  });
}

const middlewares = {
  create: [slugMiddleware],
  update: [slugMiddleware],
};

const BaseResolver = createBaseResolver(
  'Board',
  Board,
  Board,
  Inputs,
  ['topics'],
  middlewares,
);

@Resolver(Board)
export class BoardResolver extends BaseResolver {}
