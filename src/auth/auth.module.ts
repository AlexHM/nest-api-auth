import { Module } from '@nestjs/common';
import { LoginService } from './services/login/login.service';
import { UsersFindByUserNameService } from 'src/users/services/users-find-by-user-name/users-find-by-user-name.service';
import { UsersRepository } from 'src/users/repository/user.repository';
import { User } from 'src/users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './controllers/login/login.controller';
import { SignTokenService } from 'src/jwt/services/sign-token/sign-token.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UsersFindByUserNameService,
    LoginService,
    UsersRepository,
    SignTokenService,
  ],
  controllers: [LoginController],
})
export class AuthModule {}
