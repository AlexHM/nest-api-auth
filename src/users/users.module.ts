import { Module } from '@nestjs/common';
import { UsersFindByUserNameService } from './services/users-find-by-user-name/users-find-by-user-name.service';
import { UsersRepository } from './repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersRepository, UsersFindByUserNameService],
  exports: [UsersRepository, UsersFindByUserNameService],
})
export class UsersModule {}
