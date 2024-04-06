import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSkillDto {
  @ApiProperty({ description: 'Skill name', example: 'JavaScript' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ description: 'Skill color', example: '#F7DF1E' })
  @IsString()
  @IsNotEmpty()
  readonly color: string;
}
