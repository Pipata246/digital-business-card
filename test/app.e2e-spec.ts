import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from './../src/app.module.js';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('GraphQL profile query returns profile with related data', async () => {
    const query = `
      query {
        profile {
          id
          name
          description
          email
          phone
          website
          skills {
            id
            name
            level
          }
          experiences {
            id
            company
            position
            description
            startDate
            endDate
          }
          projects {
            id
            name
            description
            url
          }
        }
      }
    `;

    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200);

    expect(response.body.errors).toBeUndefined();
    expect(response.body.data.profile).not.toBeNull();

    expect(Array.isArray(response.body.data.profile.skills)).toBe(true);
    expect(Array.isArray(response.body.data.profile.experiences)).toBe(true);
    expect(Array.isArray(response.body.data.profile.projects)).toBe(true);
  });

  afterEach(async () => {
    await app.close();
  });
});
