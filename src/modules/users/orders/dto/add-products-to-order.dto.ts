import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsMongoId, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class AddProductsToOrderDto {
  @ApiProperty({
    description: 'Order products',
    example: ['product1', 'product2'],
  })
  @IsArray()
  @IsMongoId({ each: true })
  @IsNotEmpty()
  readonly products: Types.Array<Types.ObjectId>;
}
