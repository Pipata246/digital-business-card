
import { Resolver, Query } from '@nestjs/graphql';
import { ProfileService } from './profile.service.js';
import { ProfileType } from './profile.type.js';

@Resolver(() => ProfileType)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfileType, { nullable: true })
  async profile(): Promise<ProfileType | null> {
    return this.profileService.getProfile();
  }
}
