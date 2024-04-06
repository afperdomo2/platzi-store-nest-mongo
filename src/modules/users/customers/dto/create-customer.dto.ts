import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateSkillDto } from './create-skill.dto';

export class CreateCustomerDto {
  @ApiProperty({ description: 'Customer name', example: 'Pepito' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ description: 'Customer last name', example: 'Pérez' })
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty({
    description: 'Customer phone number',
    example: '+57 311 123 1234',
  })
  @IsPhoneNumber()
  @IsOptional()
  readonly phone?: string;

  @ValidateNested()
  @Type(() => CreateSkillDto)
  @IsNotEmpty()
  readonly skills: CreateSkillDto[];
}
