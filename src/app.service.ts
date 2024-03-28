import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config/dist';
import { Db } from 'mongodb';
import configuration from './config/configuration';

@Injectable()
export class AppService {
  constructor(
    @Inject(configuration.KEY) private config: ConfigType<typeof configuration>,
    @Inject('TASKS') private tasks: any[],
    @Inject('MONGO') private database: Db,
  ) {}

  getHello(): string {
    const apiKey = this.config.apiKey;
    const dbName = this.config.mongo.database;
    return `
      API key => ${apiKey}.<br/>
      Database name => ${dbName}.<br/>
      Tasks count => ${this.tasks.length}.
    `;
  }

  getTasks() {
    const tasksCollection = this.database.collection('tasks');
    return tasksCollection.find({}).toArray();
  }
}
