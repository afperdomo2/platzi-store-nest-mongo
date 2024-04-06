import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Skill } from 'src/types/skill.type';

@Schema({ timestamps: true })
export class Customer extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  phone?: string;

  @Prop({
    type: [{ name: { type: String }, color: { type: String } }],
  })
  skills: Skill[];
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
