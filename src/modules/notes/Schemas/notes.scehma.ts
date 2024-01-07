import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'authentication/schemas/user.schema';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Notes{
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const NotesSchema = SchemaFactory.createForClass(Notes);