## NextJs + BetterAuth + Prisma Starter Template

A modern web application built with Next.js, better-auth, and Prisma for robust authentication and database management.

## Tech Stack

- Next.js 15.2.4 - React framework with App Router
- better-auth 1.2.5 - Authentication library
- Prisma 6.5.0 - Type-safe database ORM
- React 19.0.0 - UI library
- TypeScript 5.x - Type safety


## Features

- Modern authentication system with social login support (GitHub)
- PostgreSQL database integration
- Type-safe data access with Prisma ORM
- Server components for improved performance


## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database


### Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Configure your environment variables in `.env`:

```
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
AUTH_SECRET="your-auth-secret"
```

4. Initialize the database:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run dev
```


## Authentication Flow

The project uses better-auth with a Prisma adapter for authentication. The main auth configuration is located in `auth.ts`, which sets up:

- PostgreSQL integration via Prisma
- GitHub social login
- Session management

Client-side authentication helpers are available in `auth-client.ts`.

## Database Schema

The database schema is defined in `schema.prisma` and managed by Prisma.

## Deployment

### Build for Production

```bash
npm run build
```


### Start Production Server

```bash
npm start
```

For detailed deployment instructions, check out the Next.js deployment documentation.

## License

This project is licensed under the MIT License.

