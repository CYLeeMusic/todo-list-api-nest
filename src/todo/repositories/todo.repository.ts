import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';

export class TodoRepository extends Repository<Todo> {
  constructor(
    @InjectRepository(Todo)
    private readonly repository: Repository<Todo>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  // Create (C)
  async createTodo(todo: Todo): Promise<Todo> {
    const newTodo = this.create(todo);
    return this.save(newTodo);
  }

  // Read (R)
  async findAllTodos(): Promise<Todo[]> {
    return this.find();
  }

  async findTodoById(id: number): Promise<Todo | undefined> {
    return this.findOne({ where: { id } });
  }

  // Update (U)
  async updateTodo(id: number, updatedTodo: Todo): Promise<Todo | undefined> {
    await this.update(id, updatedTodo);
    return this.findOne({ where: { id } });
  }

  // Delete (D)
  async deleteTodo(id: number): Promise<void> {
    await this.delete(id);
  }
}
