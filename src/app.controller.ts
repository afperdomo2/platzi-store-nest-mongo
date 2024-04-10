import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';
import { ApiKeyGuard } from './auth/guards/api-key.guard';

@UseGuards(ApiKeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiHeader({
    name: 'Auth',
    description: 'Api Key',
    required: true,
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('tasks')
  @ApiHeader({
    name: 'Auth',
    description: 'Api Key',
    required: true,
  })
  async getTasks() {
    return await this.appService.getTasks();
  }

  @Get('new')
  @Public()
  newEndpoint() {
    return 'Soy un nuevo endpoint';
  }

  @Get('/other/')
  @Public()
  otherEndpoint() {
    return 'Endpoint con slash: /other/';
  }
}
