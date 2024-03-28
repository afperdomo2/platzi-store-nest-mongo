import { registerAs } from '@nestjs/config/dist';

export default registerAs('config', () => {
  return {
    mongo: {
      conecction: process.env.MONGO_CONNECTION,
      host: process.env.MONGO_HOST,
      port: parseInt(process.env.MONGO_PORT, 10),
      username: process.env.MONGO_USERNAME,
      password: process.env.MONGO_PASSWORD,
      database: process.env.MONGO_DATABASE,
    },
    port: process.env.PORT,
    apiKey: process.env.API_KEY,
  };
});
