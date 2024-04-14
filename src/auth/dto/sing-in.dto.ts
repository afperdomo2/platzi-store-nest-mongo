import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SingInDto {
  @ApiProperty({ description: 'The user email', example: 'test@domain.com' })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ description: 'The user password', example: '$Pass123' })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
