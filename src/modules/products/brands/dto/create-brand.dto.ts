import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({ description: 'Brand name', example: 'Nike' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'Brand image URL',
    example: 'http://example.com',
  })
  @IsUrl()
  @IsOptional()
  readonly image?: string;
}
