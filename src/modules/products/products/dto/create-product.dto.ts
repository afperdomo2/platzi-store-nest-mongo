import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'Product name', example: 'Shoes' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'Product description',
    example: 'Best shoes ever',
  })
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({ description: 'Product price', example: 100 })
  @IsPositive()
  @IsNotEmpty()
  readonly price: number;

  @ApiProperty({ description: 'Product stock', example: 10 })
  @IsInt()
  @IsOptional()
  readonly stock: number;

  @ApiProperty({
    description: 'Product image URL',
    example: 'http://example.com',
  })
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}
