import { User } from "authentication/schemas/user.schema";
import { IsEmpty, IsOptional, IsString } from "class-validator";

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

  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}