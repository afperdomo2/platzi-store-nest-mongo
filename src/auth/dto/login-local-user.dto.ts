import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginLocalUserDto {
  @ApiProperty({ description: 'The user email', example: 'test@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ description: 'The user password', example: '$Pass123' })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
