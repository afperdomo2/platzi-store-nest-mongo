import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoClient } from 'mongodb';

import configuration from '../config/configuration';

const API_KEY = '123456789';
const API_KEY_PROD = 'ABC123$1';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [configuration.KEY],
      useFactory: (config: ConfigType<typeof configuration>) => {
        const { connection, host, port, username, password, database } =
          config.mongo;
        return {
          uri: `${connection}://${host}:${port}`,
          user: username,
          pass: password,
          dbName: database,
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'MONGO',
      inject: [configuration.KEY],
      useFactory: async (config: ConfigType<typeof configuration>) => {
        const { connection, host, port, username, password, database } =
          config.mongo;
        const URI = `${connection}://${username}:${password}@${host}:${port}/?authSource=admin&readPreference=primary&ssl=false`;

        const client = new MongoClient(URI);
        await client.connect();
        return client.db(database);
      },
    },
  ],
  exports: ['API_KEY', 'MONGO', MongooseModule],
})
export class DatabaseModule {}
