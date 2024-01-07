import { User } from 'authentication/schemas/user.schema';
import { IsEmpty, IsNotEmpty,IsString } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsString()
  readonly author: string;
  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}

