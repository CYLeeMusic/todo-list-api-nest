import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'todo-list',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default ormConfig;
