import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodo: Todo) {
    return this.todoService.create(createTodo);
  }

  @Get()
  findAllTodos() {
    return this.todoService.findAllTodos();
  }

  @Get(':id')
  findTodoById(@Param('id') id: string) {
    return this.todoService.findTodoById(+id);
  }

  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body() updateTodo: Todo) {
    return this.todoService.updateTodo(+id, updateTodo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(+id);
  }
}
