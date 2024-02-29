import { Module } from '@nestjs/common';
import { SignTokenService } from './services/sign-token/sign-token.service';

@Module({
  providers: [SignTokenService],
  exports: [SignTokenService],
})
export class JwtModule {}
