import { PartialType } from '@nestjs/mapped-types';
import { IsEnum } from 'class-validator';
import { TaskStatus } from '../entities/taskStatus.enum';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsEnum(TaskStatus)
  status;
}
