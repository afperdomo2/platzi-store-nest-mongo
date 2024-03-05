import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

/**
 * PartialType(CreateProductDto) crea un tipo parcial basado en la clase CreateProductDto,
 * lo que significa que UpdateProductDto solo necesita proporcionar los campos que se desean
 * actualizar en un producto en lugar de repetir todos los campos de CreateProductDto.
 */
export class UpdateProductDto extends PartialType(CreateProductDto) {}
