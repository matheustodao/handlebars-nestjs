import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TasksRepository } from './repositories/tasks.repository';
import { UsersRepository } from './repositories/users.repository';

@Global()
@Module({
  providers: [PrismaService, UsersRepository, TasksRepository],
  exports: [UsersRepository, TasksRepository],
})
export class DatabaseModule {}
