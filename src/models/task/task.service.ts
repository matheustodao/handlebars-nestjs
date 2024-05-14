import { Injectable } from '@nestjs/common';
import { TasksRepository } from 'src/shared/database/repositories/tasks.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly TaskRepo: TasksRepository) {}

  async create({ name }: CreateTaskDto, userId: string) {
    const created = await this.TaskRepo.create(
      {
        status: 'PENDING',
        name,
      },
      userId,
    );

    return created;
  }

  async findAll(userId: string) {
    const tasks = await this.TaskRepo.get(userId);

    return tasks;
  }

  async findOne(id: string, userId: string) {
    const taskFound = await this.TaskRepo.findById(id, userId);

    return taskFound;
  }

  async update(id: string, { status, name }: UpdateTaskDto, userId: string) {
    const updated = await this.TaskRepo.updateById(
      {
        status: status?.toUpperCase(),
        name,
      },
      id,
      userId,
    );
    return updated;
  }

  async remove(id: string, userId: string) {
    await this.TaskRepo.deleteById(id, userId);
  }
}
