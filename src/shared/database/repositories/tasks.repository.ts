import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TasksRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(taskDTO, userId: string) {
    const concat = { ...taskDTO, userId };

    return this.prismaService.task.create({
      data: concat,
    });
  }

  updateById(taskDTO: Prisma.TaskUpdateInput, taskId: string, userId: string) {
    return this.prismaService.task.update({
      data: taskDTO,
      where: {
        id: taskId,
        userId: userId,
      },
    });
  }

  deleteById(taskId: string, userId: string) {
    return this.prismaService.task.delete({
      where: {
        id: taskId,
        userId,
      },
    });
  }

  findById(taskId: string, userId: string) {
    return this.prismaService.task.findMany({
      where: {
        id: taskId,
        userId,
      },
    });
  }

  get(userId: string, options?: Prisma.TaskFindManyArgs) {
    return this.prismaService.task.findMany({
      ...options,
      where: {
        ...options?.where,
        userId,
      },
    });
  }
}
