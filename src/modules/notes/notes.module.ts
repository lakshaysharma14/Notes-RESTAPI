import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesSchema } from './Schemas/notes.scehma';
import { NoteService } from './notes.service';
import { NoteController } from './notes.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Notes', schema: NotesSchema }])],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}