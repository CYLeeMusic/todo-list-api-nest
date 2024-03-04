import { IsOptional } from 'class-validator';
import { CreateTodoDto } from './create-todo.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsOptional()
  title?: string;
}
