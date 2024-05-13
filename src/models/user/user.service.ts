import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/repositories/users.repository';

@Injectable()
export class UserService {
  constructor(private readonly UsersRepo: UsersRepository) {}

  async getUserById(userId: string) {
    const user = await this.UsersRepo.findById(userId);

    return {
      ...user,
      password: undefined,
      id: undefined,
    };
  }
}
