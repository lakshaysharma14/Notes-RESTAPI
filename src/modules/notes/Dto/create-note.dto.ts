import { Category } from "../Schemas/notes.scehma";

export class CreateNoteDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly category: Category;
}