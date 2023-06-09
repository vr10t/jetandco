import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    JWT_SECRET: z.string(),
    API_URL: z.string(),
    AUTH_USER_ID: z.string(),
    AUTH_USER_EMAIL: z.string(),
    VERCEL_URL: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    JWT_SECRET: process.env.JWT_SECRET,
    API_URL: process.env.API_URL,
    AUTH_USER_ID: process.env.AUTH_USER_ID,
    AUTH_USER_EMAIL: process.env.AUTH_USER_EMAIL,
    VERCEL_URL: process.env.VERCEL_URL,
  },
});
