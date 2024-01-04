import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Notes {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;
}

export const NotesSchema = SchemaFactory.createForClass(Notes);