import { Category } from "../Schemas/notes.scehma";

export class UpdateNoteDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly category: Category;
}