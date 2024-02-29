import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersFindByUserNameService } from 'src/users/services/users-find-by-user-name/users-find-by-user-name.service';
import { User } from 'src/users/user.entity';
import * as bcrypt from 'bcrypt';
import { SignTokenService } from 'src/jwt/services/sign-token/sign-token.service';

@Injectable()
export class LoginService {
  constructor(
    private findUserByUserNameService: UsersFindByUserNameService,
    private signTokenService: SignTokenService,
  ) {}

  public async signIn({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<{ token: string }> {
    try {
      const user = await this.findUserByUserNameService.find({ username });

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        throw new UnauthorizedException();
      }

      return this.signTokenService.signIn({ user });
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
