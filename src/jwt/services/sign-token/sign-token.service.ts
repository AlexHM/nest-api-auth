import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/jwt/constants';
import { User } from 'src/users/user.entity';

@Injectable()
export class SignTokenService {
  public async signIn({ user }: { user: User }): Promise<{ token: string }> {
    const payload = { userId: user.id, username: user.username };

    const token = new JwtService().sign(payload, {
      secret: jwtConstants.secret,
    });

    return {
      token,
    };
  }
}
