import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { SingInDto } from './dto/sing-in.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authServide: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  singIn(@Body(ValidationPipe) singInDto: SingInDto) {
    return this.authServide.singIn(singInDto);
  }
}
