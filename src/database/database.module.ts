import { Global, Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';

const API_KEY = '123456789';
const API_KEY_PROD = 'ABC123$1';
const URI =
  'mongodb://root:123456@localhost:27017/?authSource=admin&readPreference=primary&ssl=false';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'MONGO',
      useFactory: async () => {
        const client = new MongoClient(URI);
        await client.connect();
        return client.db('platzi-store');
      },
    },
  ],
  exports: ['API_KEY', 'MONGO'],
})
export class DatabaseModule {}
