import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ProjectType {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => String, { nullable: true })
  url: string | null;
}
