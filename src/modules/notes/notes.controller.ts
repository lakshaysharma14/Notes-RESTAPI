import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { NoteService } from './notes.service';
import { Notes } from './Schemas/notes.scehma';
import { CreateNoteDto } from './Dto/create-note.dto';
import { UpdateNoteDto } from './Dto/update-note.dto';
  
  @Controller('books')
  export class NoteController {
    constructor(private notesService: NoteService) {}
  
    @Get()
    async getAllBooks(): Promise<Notes[]> {
      return this.notesService.findAll();
    }
  
    @Post()
    async createBook(
      @Body()
      book: CreateNoteDto,
    ): Promise<Notes> {
      return this.notesService.create(book);
    }
  
    @Get(':id')
    async getBook(
      @Param('id')
      id: string,
    ): Promise<Notes> {
      return this.notesService.findById(id);
    }
  
    @Put(':id')
    async updateBook(
      @Param('id')
      id: string,
      @Body()
      book: UpdateNoteDto,
    ): Promise<Notes> {
      return this.notesService.updateById(id, book);
    }
  
    @Delete(':id')
    async deleteBook(
      @Param('id')
      id: string,
    ): Promise<Notes> {
      return this.notesService.deleteById(id);
    }
  }