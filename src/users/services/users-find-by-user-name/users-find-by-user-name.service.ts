import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from 'src/users/repository/user.repository';
import { User } from 'src/users/user.entity';

@Injectable()
export class UsersFindByUserNameService {
  constructor(private readonly _usersRepository: UsersRepository) {}

  public async find({ username }: { username: string }) {
    const user: User | null =
      await this._usersRepository.findByUsername(username);

    if (!user) {
      throw new NotFoundException(`User ${username} not found`);
    }

    return user;
  }
}
