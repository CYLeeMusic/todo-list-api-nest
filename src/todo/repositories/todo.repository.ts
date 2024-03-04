import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { CreateTodoDto } from '../dto/create-todo.dto';

export class TodoRepository extends Repository<Todo> {
  constructor(
    @InjectRepository(Todo)
    private readonly repository: Repository<Todo>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  // Create (C)
  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const newTodo = this.create(createTodoDto);
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
  async updateTodo(
    id: number,
    updateTodoDto: UpdateTodoDto,
  ): Promise<Todo | undefined> {
    await this.update(id, updateTodoDto);
    return this.findOne({ where: { id } });
  }

  // Delete (D)
  async deleteTodo(id: number): Promise<void> {
    await this.delete(id);
  }
}
