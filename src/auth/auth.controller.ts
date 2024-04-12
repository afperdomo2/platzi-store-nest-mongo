import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { Request } from 'express';
import { LoginLocalUserDto } from './dto/login-local-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({ summary: 'User login' })
  login(@Req() req: Request, @Body(ValidationPipe) data: LoginLocalUserDto) {
    console.log('data:', data);
    return req.user;
  }
}
