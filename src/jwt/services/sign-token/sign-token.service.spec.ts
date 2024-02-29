import { Test, TestingModule } from '@nestjs/testing';
import { SignTokenService } from './sign-token.service';

describe('SignTokenService', () => {
  let service: SignTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignTokenService],
    }).compile();

    service = module.get<SignTokenService>(SignTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
