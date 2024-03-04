import { Injectable } from '@nestjs/common';
import { TodoRepository } from './repositories/todo.repository';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoRepository.createTodo(createTodoDto);
  }

  async findAllTodos(): Promise<Todo[]> {
    return this.todoRepository.findAllTodos();
  }

  async findTodoById(id: number): Promise<Todo | undefined> {
    return this.todoRepository.findTodoById(id);
  }

  async updateTodo(
    id: number,
    updateTodoDto: UpdateTodoDto,
  ): Promise<Todo | undefined> {
    return this.todoRepository.updateTodo(id, updateTodoDto);
  }

  async deleteTodo(id: number) {
    return this.todoRepository.deleteTodo(id);
  }
}
