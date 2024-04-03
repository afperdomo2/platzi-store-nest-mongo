import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const ProductSchema = SchemaFactory.createForClass(Product);

// Crea un index en el campo price en orden ascendente y el campo stock en orden descendente.
ProductSchema.index({ price: 1, stock: -1 });
