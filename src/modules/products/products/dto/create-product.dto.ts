import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { CreateCategoryDto } from './create-category.dto';
import { Type } from 'class-transformer';

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

  @ApiProperty({ description: 'Product price', example: 90_000 })
  @IsPositive()
  @IsNotEmpty()
  readonly price: number;

  @ApiProperty({ description: 'Product stock', example: 10 })
  @IsInt()
  @IsOptional()
  readonly stock?: number;

  @ApiProperty({
    description: 'Product image URL',
    example: 'http://example.com',
  })
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;

  @ApiProperty({
    description: 'Product category',
    example: { name: 'Clothes', image: 'http://example.com' },
  })
  @ValidateNested() // Este decorador es necesario para validar objetos anidados
  @IsNotEmpty()
  @Type(() => CreateCategoryDto)
  readonly category: CreateCategoryDto;

  @IsMongoId()
  @IsNotEmpty({ message: 'The brand must be a valid ObjectId' })
  readonly brand: string;
}
