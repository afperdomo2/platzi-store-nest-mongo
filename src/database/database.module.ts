import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongoClient } from 'mongodb';

import configuration from '../config/configuration';

const API_KEY = '123456789';
const API_KEY_PROD = 'ABC123$1';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'MONGO',
      inject: [configuration.KEY],
      useFactory: async (config: ConfigType<typeof configuration>) => {
        const { conecction, host, port, username, password, database } =
          config.mongo;
        const URI = `${conecction}://${username}:${password}@${host}:${port}/?authSource=admin&readPreference=primary&ssl=false`;

        const client = new MongoClient(URI);
        await client.connect();
        return client.db(database);
      },
    },
  ],
  exports: ['API_KEY', 'MONGO'],
})
export class DatabaseModule {}
