import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ApiKeyGuard } from './auth/guards/api-key.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('tasks')
  async getTasks() {
    return await this.appService.getTasks();
  }

  @UseGuards(ApiKeyGuard)
  @Get('new')
  @ApiHeader({
    name: 'Auth',
    description: 'Api Key',
    required: true,
  })
  newEndpoint() {
    return 'Soy un nuevo endpoint';
  }

  @Get('/other/')
  otherEndpoint() {
    return 'Endpoint con slash: /other/';
  }
}
