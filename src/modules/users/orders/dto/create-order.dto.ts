import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsMongoId, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

import { Customer } from '../../customers/schemas/customer.schema';

export class CreateOrderDto {
  @ApiProperty({ description: 'Customer ID', example: 'customer1' })
  @IsMongoId()
  @IsNotEmpty()
  readonly customer: Customer | Types.ObjectId;

  @ApiProperty({
    description: 'Order date',
    example: '2021-07-01T00:00:00.000Z',
  })
  @IsNotEmpty()
  readonly date: Date;

  @ApiProperty({
    description: 'Order products',
    example: ['product1', 'product2'],
  })
  @ArrayNotEmpty()
  @IsArray()
  @IsMongoId({ each: true })
  @IsNotEmpty()
  readonly products: Types.Array<Types.ObjectId>;
}
