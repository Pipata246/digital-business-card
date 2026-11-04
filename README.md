# Digital Business Card — API

Backend-приложение цифровой визитки специалиста. Предоставляет информацию о профиле, навыках, опыте работы и проектах через GraphQL API.

## Технологический стек

- **Node.js** — среда выполнения.
- **TypeScript** — язык программирования.
- **NestJS** — backend-фреймворк.
- **GraphQL** — API для получения данных.
- **Apollo Server** — GraphQL-сервер и Apollo Sandbox.
- **PostgreSQL** — реляционная база данных.
- **Prisma ORM** — работа с базой данных.
- **Docker** — запуск PostgreSQL в контейнере.
- **Vitest** — тестирование.

## Возможности

- Получение информации о специалисте.
- Получение списка навыков и уровня владения ими.
- Получение опыта работы.
- Получение списка проектов.
- Связанные данные профиля через один GraphQL-запрос.
- Автоматическое применение миграций и заполнение базы при запуске в режиме разработки.

## Структура проекта

```text
digital-business-card/
├── prisma/
│   ├── migrations/       # Миграции базы данных
│   ├── schema.prisma     # Схема базы данных
│   └── seed.ts           # Начальное заполнение БД
├── src/
│   ├── graphql/          # GraphQL-конфигурация и resolver
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
├── docker-compose.yml
└── package.json
```

## Требования

Перед запуском необходимо установить:

- Node.js
- npm
- Docker Desktop

## Установка и запуск

### 1. Клонирование проекта

```bash
git clone https://github.com/Pipata246/digital-business-card.git
cd digital-business-card
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```env
DATABASE_URL="postgresql://developer:developer_password@localhost:5432/digital_card?schema=public"
```

### 4. Запуск PostgreSQL

```bash
docker compose up -d
```

### 5. Запуск приложения

```bash
npm run start:dev
```

Команда применяет миграции Prisma, заполняет базу начальными данными и запускает NestJS в режиме разработки.

## GraphQL API

После запуска приложение доступно по адресу:

`http://localhost:3000/graphql`

Для выполнения запросов используется Apollo Sandbox.

### Получение профиля

```graphql
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

Проверка кода линтером:

```bash
npm run lint
```

Сборка приложения:

```bash
npm run build
```

Запуск собранного приложения:

```bash
npm run start:prod
```

## Архитектура

Приложение построено на модульной архитектуре NestJS.

- **Resolver** принимает GraphQL-запросы и передаёт управление сервису.
- **Service** содержит бизнес-логику и обращается к базе данных через Prisma.
- **PrismaService** отвечает за подключение к PostgreSQL.
- **Prisma Schema** описывает модели данных и связи между ними.

Для получения профиля вместе с навыками, опытом работы и проектами используется Prisma `include`. Это позволяет избежать отдельных обращений к сервису для каждой вложенной сущности при обработке GraphQL-запроса.

## Автор

Разработано в рамках тестового задания — Backend Digital Business Card.

GitHub: https://github.com/Pipata246/digital-business-card