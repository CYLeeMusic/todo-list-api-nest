import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty({ message: 'Title cannot be empty' })
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsBoolean()
  complete: false;

  @IsOptional()
  @IsDate()
  dueDate: Date;
}
