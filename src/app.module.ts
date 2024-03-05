import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config/dist';
import { lastValueFrom } from 'rxjs';

import { enviroments } from './enviroments';
import configuration from './config/configuration';
import envValidations from './config/envValidations';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsGroupModule } from './modules/products/products.module';
import { UsersGroupModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [configuration],
      isGlobal: true,
      validationSchema: envValidations,
    }),
    HttpModule,
    ProductsGroupModule,
    UsersGroupModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const request = http.get('https://jsonplaceholder.typicode.com/todos');
        const tasks = await lastValueFrom(request);
        return tasks.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
