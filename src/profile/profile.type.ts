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

  @Field({ nullable: true })
email: string | null;

@Field({ nullable: true })
phone: string | null;

@Field({ nullable: true })
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