import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesSchema } from './Schemas/notes.scehma';
import { NoteService } from './notes.service';
import { NoteController } from './notes.controller';
import { AuthenticationModule } from 'authentication/authentication.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    AuthenticationModule,
    MongooseModule.forFeature([{ name: 'Notes', schema: NotesSchema }])],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}