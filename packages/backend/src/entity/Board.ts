import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Topic } from './Topic';

@ObjectType()
@Entity()
export class Board extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn({ generated: 'uuid' })
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => [Topic])
  @OneToMany(() => Topic, (topic) => topic.board, {
    cascade: true,
    onDelete: 'CASCADE',
    primary: true,
  })
  topics: Topic[];

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;
}
