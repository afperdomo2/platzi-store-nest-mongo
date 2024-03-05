import { registerAs } from '@nestjs/config/dist';

export default registerAs('config', () => {
  return {
    database: {
      host: process.env.DATABASE_HOST,
      port: process.env.DB_PORT,
      name: process.env.DB_NAME,
    },
    port: process.env.PORT,
    apiKey: process.env.API_KEY,
  };
});
