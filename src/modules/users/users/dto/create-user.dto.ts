import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'User name', example: 'test@domain.com' })
  @IsEmail({}, { message: 'The email is invalid' })
  @IsNotEmpty({ message: 'The name is required' })
  readonly email: string;

  @ApiProperty({ description: 'User password', example: '$Pass123' })
  @IsStrongPassword({
    minLength: 6,
    minSymbols: 1,
    minUppercase: 1,
    minNumbers: 1,
  })
  @IsString({ message: 'The password must be a string' })
  @IsNotEmpty({ message: 'The password is required' })
  readonly password: string;

  @ApiProperty({ description: 'User role', example: 'admin' })
  @IsNotEmpty({ message: 'The role is required' })
  readonly role: string;
}
