import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config/dist';
import configuration from './config/configuration';

@Injectable()
export class AppService {
  constructor(
    @Inject(configuration.KEY) private config: ConfigType<typeof configuration>,
    @Inject('TASKS') private tasks: any[],
  ) {}

  getHello(): string {
    const apiKey = this.config.apiKey;
    const dbName = this.config.database.name;
    return `
      API key => ${apiKey}.<br/>
      Database name => ${dbName}.<br/>
      Tasks count => ${this.tasks.length}.
    `;
  }
}
