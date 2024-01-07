import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Notes } from './Schemas/notes.scehma';
import { User } from 'authentication/schemas/user.schema';

@Injectable()
export class NoteService {
  
  constructor(
    @InjectModel(Notes.name)
    private noteModel: mongoose.Model<Notes>,
  ) {}

  async findAll(query): Promise<Notes[]> {
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    const notes = await this.noteModel
      .find({ ...keyword })
      .limit(resPerPage) // limits the no of page
      .skip(skip); // skips the no of results
    return notes;
  }

  async create(book: Notes,user:User): Promise<Notes> {
    const data = Object.assign(book, { user: user._id });

    const res = await this.noteModel.create(data);
    return res;
  }

  async findById(id: string): Promise<Notes> {
    const isValidId = mongoose.isValidObjectId(id);

    if (!isValidId) {
      throw new BadRequestException('Please enter correct id.');
    }

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