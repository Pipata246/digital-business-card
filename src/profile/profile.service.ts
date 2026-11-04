import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile() {
    return this.prisma.profile.findFirst({
      include: {
        skills: true,
        experiences: true,
        projects: true,
      },
    });
  }
}