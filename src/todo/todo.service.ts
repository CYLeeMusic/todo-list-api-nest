import { Injectable } from '@nestjs/common';
import { TodoRepository } from './repositories/todo.repository';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async create(todo: Todo): Promise<Todo> {
    return this.todoRepository.createTodo(todo);
  }

  async findAllTodos(): Promise<Todo[]> {
    return this.todoRepository.findAllTodos();
  }

  async findTodoById(id: number): Promise<Todo | undefined> {
    return this.todoRepository.findTodoById(id);
  }

  async updateTodo(id: number, updateTodo: Todo): Promise<Todo | undefined> {
    return this.todoRepository.updateTodo(id, updateTodo);
  }

  async deleteTodo(id: number) {
    return this.todoRepository.deleteTodo(id);
  }
}
