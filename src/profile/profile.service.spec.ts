
import { Test, TestingModule } from '@nestjs/testing';
import { ProfileService } from './profile.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

describe('ProfileService', () => {
  let profileService: ProfileService;

  const mockPrismaService = {
    profile: {
      findUnique: vi.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfileService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    profileService = module.get<ProfileService>(ProfileService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(profileService).toBeDefined();
  });

  it('should return profile with skills, experiences and projects', async () => {
    const mockProfile = {
      id: 1,
      name: 'Данил',
      description: 'Веб-разработчик',
      email: 'danil@example.com',
      phone: null,
      website: 'https://example.com',
      skills: [{ id: 1, name: 'HTML', level: 'Продвинутый' }],
      experiences: [{ id: 1, company: 'Фриланс', position: 'Веб-разработчик' }],
      projects: [{ id: 1, name: 'Персональный сайт', description: 'Портфолио' }],
    };

    mockPrismaService.profile.findUnique.mockResolvedValue(mockProfile);

    const result = await profileService.getProfile();

    expect(result).toEqual(mockProfile);
    expect(mockPrismaService.profile.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
      include: {
        skills: true,
        experiences: true,
        projects: true,
      },
    });
  });
});
