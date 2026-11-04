import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ExperienceType {
  @Field(() => Int)
  id: number;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Date)
  startDate: Date;

  @Field(() => Date, { nullable: true })
  endDate?: Date;
}