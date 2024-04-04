import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Brand } from '../../brands/schemas/brand.schema';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description?: string;

  @Prop({ required: true, index: true, type: Number, min: 0 })
  price: number;

  @Prop({ type: Number, min: 0, default: 0 })
  stock: number;

  @Prop({ required: true })
  image: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop(raw({ name: { type: String }, image: { type: String } }))
  category: Record<string, any>;

  @Prop({ type: Types.ObjectId, ref: Brand.name, required: true })
  brand: Brand | Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

// Crea un index en el campo price en orden ascendente y el campo stock en orden descendente.
ProductSchema.index({ price: 1, stock: -1 });
