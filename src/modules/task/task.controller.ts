import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ActiveUserId } from 'src/shared/decorators/activeUserId';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@ActiveUserId() userId: string, @Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto, userId);
  }

  @Get()
  findAll(@ActiveUserId() userId: string) {
    return this.taskService.findAll(userId);
  }

  @Get(':id')
  findOne(@ActiveUserId() userId: string, @Param('id') id: string) {
    return this.taskService.findOne(id, userId);
  }

  @Patch(':id')
  update(
    @ActiveUserId() userId: string,
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.update(id, updateTaskDto, userId);
  }

  @Delete(':id')
  remove(@ActiveUserId() userId: string, @Param('id') id: string) {
    return this.taskService.remove(id, userId);
  }
}
