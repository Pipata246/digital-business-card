import { ObjectType, Field, Int } from '@nestjs/graphql';
import { SkillType } from './skill.type.js';
import { ExperienceType } from './experience.type.js';
import { ProjectType } from './project.type.js';

@ObjectType()
export class ProfileType {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => String, { nullable: true })
  email: string | null;

  @Field(() => String, { nullable: true })
  phone: string | null;

  @Field(() => String, { nullable: true })
  website: string | null;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [SkillType])
  skills: SkillType[];

  @Field(() => [ExperienceType])
  experiences: ExperienceType[];

  @Field(() => [ProjectType])
  projects: ProjectType[];
}
