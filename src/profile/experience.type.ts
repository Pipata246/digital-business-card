import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ExperienceType {
  @Field(() => Int)
  id: number;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field(() => String, { nullable: true })
  description: string | null;

  @Field(() => Date)
  startDate: Date;

  @Field(() => Date, { nullable: true })
  endDate: Date | null;
}
