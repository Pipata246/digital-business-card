# Digital Business Card — GraphQL API

Backend-приложение цифровой визитки специалиста. Предоставляет информацию о профиле, навыках, опыте работы и проектах через GraphQL API.

## Технологический стек

- **Node.js 22** — среда выполнения.
- **TypeScript** — язык программирования.
- **NestJS** — backend-фреймворк.
- **GraphQL** — API для получения данных.
- **Apollo Server** — GraphQL-сервер и Apollo Sandbox.
- **PostgreSQL 16** — реляционная база данных.
- **Prisma 6** — ORM для работы с базой данных.
- **Docker и Docker Compose** — контейнеризация приложения и базы данных.
- **Vitest** — модульное и E2E-тестирование.
- **Oxlint** — статический анализ кода.

## Возможности

- Получение информации о специалисте.
- Получение ссылок на личный сайт, GitHub и Telegram.
- Получение навыков и уровня владения ими.
- Получение опыта работы.
- Получение списка проектов.
- Получение профиля и всех связанных данных одним GraphQL-запросом.
- Автоматическое применение миграций базы данных.
- Автоматическое заполнение базы начальными данными при запуске приложения.

## Структура проекта

```text
digital-business-card/
├── prisma/
│   ├── migrations/       # Миграции базы данных
│   ├── schema.prisma     # Схема базы данных
│   └── seed.ts           # Начальное заполнение БД
├── src/
│   ├── graphql/          # GraphQL-конфигурация
│   ├── prisma/           # PrismaService и PrismaModule
│   ├── profile/          # Модуль профиля
│   │   ├── profile.resolver.ts
│   │   ├── profile.service.ts
│   │   ├── profile.type.ts
│   │   ├── skill.type.ts
│   │   ├── experience.type.ts
│   │   └── project.type.ts
│   ├── app.module.ts
│   └── main.ts
├── test/                 # E2E-тесты
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── package.json
```

## Требования

Для запуска проекта необходимы:

- Node.js 22 или совместимая версия.
- npm.
- Docker Desktop с Docker Compose.

## Запуск через Docker

Рекомендуемый способ запуска: Docker автоматически поднимает приложение и PostgreSQL.

### 1. Клонирование репозитория

```bash
git clone https://github.com/Pipata246/digital-business-card.git
cd digital-business-card
```

### 2. Запуск приложения

```bash
docker compose up --build -d
```

Docker Compose автоматически:

1. Собирает образ приложения.
2. Запускает PostgreSQL.
3. Дожидается готовности базы данных.
4. Применяет миграции Prisma.
5. Заполняет базу начальными данными.
6. Запускает NestJS-приложение.

### 3. Доступ к API

После запуска GraphQL API доступен по адресу:

`http://localhost:3000/graphql`

### 4. Просмотр логов

```bash
docker compose logs -f app
```

### 5. Остановка приложения

```bash
docker compose down
```

Данные PostgreSQL сохраняются в Docker volume и не удаляются при обычной остановке контейнеров.

## Локальный запуск для разработки

Также приложение можно запустить локально, используя Docker только для PostgreSQL.

### 1. Клонирование репозитория

```bash
git clone https://github.com/Pipata246/digital-business-card.git
cd digital-business-card
```

### 2. Установка зависимостей

```bash
npm ci
```

### 3. Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```env
DATABASE_URL="postgresql://developer:developer_password@localhost:5432/digital_card?schema=public"
```

### 4. Запуск PostgreSQL

```bash
docker compose up -d postgres
```

### 5. Запуск приложения

```bash
npm run start:dev
```

Команда автоматически применяет миграции, заполняет базу начальными данными и запускает NestJS в режиме разработки.

## GraphQL API

После запуска приложение доступно по адресу:

`http://localhost:3000/graphql`

Для выполнения запросов используется Apollo Sandbox.

### Получение профиля со всеми связанными данными

```graphql
query {
  profile {
    id
    name
    description
    email
    phone
    website
    github
    telegram
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
```

### Получение приветственного сообщения

```graphql
query {
  hello
}
```

## Тестирование

Запуск модульных тестов:

```bash
npm run test
```

Запуск E2E-тестов:

```bash
npm run test:e2e
```

Проверка покрытия тестами:

```bash
npm run test:cov
```

## Дополнительные команды

Сборка приложения:

```bash
npm run build
```

Проверка кода линтером:

```bash
npm run lint
```

Запуск собранного приложения:

```bash
npm run start:prod
```

## Архитектура

Приложение построено на модульной архитектуре NestJS с разделением ответственности.

- **Resolver** принимает GraphQL-запросы и передаёт управление сервисному слою.
- **Service** содержит логику получения данных и взаимодействует с базой через Prisma.
- **PrismaService** отвечает за доступ к PostgreSQL.
- **Prisma Schema** описывает модели данных и связи между ними.

Для получения профиля вместе с навыками, опытом работы и проектами используется Prisma `include`. Это позволяет загружать связанные сущности централизованно, без отдельных обращений к сервису для каждого элемента вложенных списков.

Начальные данные создаются через Seed. Операция выполняется с использованием `upsert`, поэтому повторный запуск не создаёт дубликаты профиля.

Миграции хранятся в репозитории и применяются командой `prisma migrate deploy`.

## Автор

Разработано в рамках тестового задания — Backend Digital Business Card.

- GitHub: https://github.com/Pipata246
- Проект: https://github.com/Pipata246/digital-business-card
- Личный сайт: https://nerdserv.tech/
