import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Customer } from '../../customers/schemas/customer.schema';
import { Product } from 'src/modules/products/products/schemas/product.schema';

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: Types.ObjectId, ref: Customer.name, required: true })
  customer: Customer | Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: Product.name, required: true })
  products: Types.Array<Types.ObjectId | Product>;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
