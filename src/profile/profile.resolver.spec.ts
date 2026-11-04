import { Test, TestingModule } from '@nestjs/testing';
import { ProfileResolver } from './profile.resolver.js';
import { ProfileService } from './profile.service.js';

describe('ProfileResolver', () => {
  let profileResolver: ProfileResolver;

  const mockProfileService = {
    getProfile: vi.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfileResolver,
        {
          provide: ProfileService,
          useValue: mockProfileService,
        },
      ],
    }).compile();

    profileResolver = module.get<ProfileResolver>(ProfileResolver);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(profileResolver).toBeDefined();
  });

  it('should return profile from ProfileService', async () => {
    const mockProfile = {
      id: 1,
      name: 'Данил',
      description: 'Веб-разработчик',
      skills: [],
      experiences: [],
      projects: [],
    };

    mockProfileService.getProfile.mockResolvedValue(mockProfile);

    const result = await profileResolver.profile();

    expect(result).toEqual(mockProfile);
    expect(mockProfileService.getProfile).toHaveBeenCalledTimes(1);
  });
});