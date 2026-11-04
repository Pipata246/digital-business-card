import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SkillType {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  level?: string;
}