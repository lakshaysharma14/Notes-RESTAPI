import { IsOptional, IsString } from "class-validator";

export class UpdateNoteDto {
  @IsOptional()
  @IsString()
  readonly title: string;
  
  @IsOptional()
  @IsString()
  readonly description: string;
  
  @IsOptional()
  @IsString()
  readonly author: string;
}