import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    Req,
    UseGuards,
  } from '@nestjs/common';
import { NoteService } from './notes.service';
import { Notes } from './Schemas/notes.scehma';
import { CreateNoteDto } from './Dto/create-note.dto';
import { UpdateNoteDto } from './Dto/update-note.dto';
import { AuthGuard } from '@nestjs/passport';

  
  @Controller('notes')
  export class NoteController {
    constructor(private notesService: NoteService) {}
  
    @Get()
    async getAllNotes(@Query() query): Promise<Notes[]> {
      console.log(query);
      return this.notesService.findAll(query);
    }
  
    @Post()
    @UseGuards(AuthGuard())
    async createNote(
      @Body()
      book: CreateNoteDto,

      @Req() req
    ): Promise<Notes> {
      console.log(req.user);
      return this.notesService.create(book,req.user);
    }
  
    @Get(':id')
    async getNote(
      @Param('id')
      id: string,
    ): Promise<Notes> {
      return this.notesService.findById(id);
    }
  
    @Put(':id')
    async updateNoteById(
      @Param('id')
      id: string,
      @Body()
      book: UpdateNoteDto,
    ): Promise<Notes> {
      return this.notesService.updateById(id, book);
    }
  
    @Delete(':id')
    async deleteNoteById(
      @Param('id')
      id: string,
    ): Promise<Notes> {
      return this.notesService.deleteById(id);
    }
  }