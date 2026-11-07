
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.profile.upsert({
    where: { id: 1 },

    update: {
      name: 'Мельников Даниил',
      description:
        'Разрабатываю сайты, веб-приложения и backend-системы.',
      email: null,
      phone: null,
      website: 'https://nerdserv.tech/',
      github: 'https://github.com/Pipata246',
      telegram: 'https://t.me/nerdServv',

      skills: {
        deleteMany: {},
        create: [
          { name: 'HTML', level: 'Продвинутый' },
          { name: 'CSS', level: 'Продвинутый' },
          { name: 'JavaScript', level: 'Продвинутый' },
          { name: 'TypeScript', level: 'Средний' },
          { name: 'React', level: 'Средний' },
          { name: 'Next.js', level: 'Средний' },
          { name: 'Tailwind CSS', level: 'Средний' },
          { name: 'Node.js', level: 'Средний' },
          { name: 'NestJS', level: 'Начальный' },
          { name: 'PostgreSQL', level: 'Начальный' },
          { name: 'GraphQL', level: 'Начальный' },
          { name: 'Docker', level: 'Начальный' },
          { name: 'Git', level: 'Средний' },
        ],
      },

      experiences: {
        deleteMany: {},
        create: [
          {
            company: 'Фриланс',
            position: 'Веб-разработчик',
            description:
              'Разработка сайтов и веб-приложений с нуля. Создание адаптивных интерфейсов, интеграция API и внешних сервисов, разработка серверной логики, запуск и сопровождение проектов.',
            startDate: new Date('2025-01-01'),
          },
        ],
      },

      projects: {
        deleteMany: {},
        create: [
          {
            name: 'Персональный сайт',
            description:
              'Личный сайт и портфолио веб-разработчика.',
            url: 'https://nerdserv.tech/',
          },
          {
            name: 'Landing Page',
            description:
              'Разработка и запуск адаптивной посадочной страницы.',
            url: 'https://lp-lend.vercel.app/',
          },
          {
            name: 'Yandex GPT Telegram Bot',
            description:
              'Telegram-бот с интеграцией Yandex GPT.',
            url: 'https://github.com/Pipata246/yandex-gpt-telegram-bot',
          },
          {
            name: 'Digital Business Card',
            description:
              'Backend цифровой визитки на NestJS, TypeScript, Prisma и GraphQL.',
            url: 'https://github.com/Pipata246/digital-business-card',
          },
        ],
      },
    },

    create: {
      id: 1,
      name: 'Мельников Даниил',
      description:
        'Разрабатываю сайты, веб-приложения и backend-системы.',
      website: 'https://nerdserv.tech/',
      github: 'https://github.com/Pipata246',
      telegram: 'https://t.me/nerdServv',

      skills: {
        create: [
          { name: 'HTML', level: 'Продвинутый' },
          { name: 'CSS', level: 'Продвинутый' },
          { name: 'JavaScript', level: 'Продвинутый' },
          { name: 'TypeScript', level: 'Средний' },
          { name: 'React', level: 'Средний' },
          { name: 'Next.js', level: 'Средний' },
          { name: 'Tailwind CSS', level: 'Средний' },
          { name: 'Node.js', level: 'Средний' },
          { name: 'NestJS', level: 'Начальный' },
          { name: 'PostgreSQL', level: 'Начальный' },
          { name: 'GraphQL', level: 'Начальный' },
          { name: 'Docker', level: 'Начальный' },
          { name: 'Git', level: 'Средний' },
        ],
      },

      experiences: {
        create: [
          {
            company: 'Фриланс',
            position: 'Веб-разработчик',
            description:
              'Разработка сайтов и веб-приложений с нуля. Создание адаптивных интерфейсов, интеграция API и внешних сервисов, разработка серверной логики, запуск и сопровождение проектов.',
            startDate: new Date('2025-01-01'),
          },
        ],
      },

      projects: {
        create: [
          {
            name: 'Персональный сайт',
            description:
              'Личный сайт и портфолио веб-разработчика.',
            url: 'https://nerdserv.tech/',
          },
          {
            name: 'Landing Page',
            description:
              'Разработка и запуск адаптивной посадочной страницы.',
            url: 'https://lp-lend.vercel.app/',
          },
          {
            name: 'Yandex GPT Telegram Bot',
            description:
              'Telegram-бот с интеграцией Yandex GPT.',
            url: 'https://github.com/Pipata246/yandex-gpt-telegram-bot',
          },
          {
            name: 'Digital Business Card',
            description:
              'Backend цифровой визитки на NestJS, TypeScript, Prisma и GraphQL.',
            url: 'https://github.com/Pipata246/digital-business-card',
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
