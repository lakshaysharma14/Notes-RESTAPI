import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Notes } from './Schemas/notes.scehma';

@Injectable()
export class NoteService {
  
  constructor(
    @InjectModel(Notes.name)
    private noteModel: mongoose.Model<Notes>,
  ) {}

  async findAll(): Promise<Notes[]> {
    const books = await this.noteModel.find();
    return books;
  }

  async create(book: Notes): Promise<Notes> {
    const res = await this.noteModel.create(book);
    return res;
  }

  async findById(id: string): Promise<Notes> {
    const book = await this.noteModel.findById(id);

    if (!book) {
      throw new NotFoundException('Book not found.');
    }

    return book;
  }

  async updateById(id: string, book: Notes): Promise<Notes> {
    return await this.noteModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Notes> {
    return await this.noteModel.findByIdAndDelete(id);
  }
}