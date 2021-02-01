import { Field, InputType } from 'type-graphql';

@InputType()
class TopicBaseInput {
  @Field()
  name: string;

  @Field()
  icon: string;

  @Field()
  description: string;
}

@InputType()
class BoardBaseInput {
  @Field()
  name: string;

  @Field(() => [TopicBaseInput])
  topics: TopicBaseInput[];
}

@InputType()
export class CreateBoardInput extends BoardBaseInput {}

@InputType()
export class UpdateBoardInput extends BoardBaseInput {}

@InputType()
export class FilterBoardInput {
  @Field({ nullable: true })
  name?: string;
}
