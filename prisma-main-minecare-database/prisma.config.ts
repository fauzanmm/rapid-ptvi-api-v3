import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma-main-minecare-database/schema.prisma",
  migrations: {
    path: "prisma-main-minecare-database/migrations",
  },
  datasource: {
    url: env("DATABASE_URL_MAIN_MINECARE"),
  },
});
