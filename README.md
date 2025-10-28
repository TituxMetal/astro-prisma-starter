# Astro Prisma Starter

This is a starter project that integrates Prisma with Astro. It uses the following technologies:

- Astro
- React
- Tailwind CSS V4
- TypeScript
- ESLint
- Prettier
- Prisma
- SQLite
- Bun

It demonstrates how to connect to a local SQLite database and perform basic operations.

## Development

```bash
bun dev
```

## Production

```bash
bun run build
bun preview
```

## Database Setup

Initialize the database:

```bash
bunx prisma migrate dev
bunx prisma db seed
```
