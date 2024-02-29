import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserLoginDto } from 'src/auth/dtos/login.dto';
import { LoginService } from 'src/auth/services/login/login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  signIn(@Body() signInDto: UserLoginDto) {
    return this.loginService.signIn({
      username: signInDto.username,
      password: signInDto.password,
    });
  }
}
