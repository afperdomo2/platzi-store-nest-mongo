/**
 * Los Data Transfer Objects (DTO) se utilizan en NestJS para representar los datos
 * que se transmiten entre las capas de la aplicación.
 *
 * Los DTO son objetos simples que tienen solo los datos que son necesarios para una
 * tarea específica.
 */
import {
  IsString,
  IsUrl,
  IsPositive,
  IsInt,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombre del producto' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Descripción del producto' })
  readonly description: string;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ description: 'Precio del producto' })
  readonly price: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ description: 'Stock del producto' })
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({ description: 'URL de la imagen del producto' })
  readonly image: string;
}
