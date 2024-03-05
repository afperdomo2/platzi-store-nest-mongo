import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new')
  newEndpoint() {
    return 'Soy un nuevo endpoint';
  }

  @Get('/other/')
  otherEndpoint() {
    return 'Endpoint con slash: /other/';
  }
}
