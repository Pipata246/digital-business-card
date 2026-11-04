import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.profile.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Данил',
      description: 'Веб-разработчик. Создаю современные сайты и веб-приложения.',

      email: 'danil@example.com',
      website: 'https://example.com',

      skills: {
        create: [
          { name: 'HTML', level: 'Продвинутый' },
          { name: 'CSS', level: 'Продвинутый' },
          { name: 'JavaScript', level: 'Продвинутый' },
          { name: 'TypeScript', level: 'Средний' },
          { name: 'React', level: 'Средний' },
          { name: 'Node.js', level: 'Средний' },
          { name: 'NestJS', level: 'Начальный' },
        ],
      },

      experiences: {
        create: [
          {
            company: 'Фриланс',
            position: 'Веб-разработчик',
            description: 'Разработка сайтов и веб-приложений для клиентов.',
            startDate: new Date('2024-01-01'),
          },
        ],
      },

      projects: {
        create: [
          {
            name: 'Персональный сайт',
            description: 'Сайт-портфолио веб-разработчика.',
            url: 'https://example.com',
          },
          {
            name: 'Цифровая визитка',
            description: 'Backend-приложение на NestJS, Prisma и GraphQL.',
          },
        ],
      },
    },
  });

  console.log('База данных успешно заполнена!');
}

main()
  .catch((error) => {
    console.error('Ошибка заполнения базы:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });