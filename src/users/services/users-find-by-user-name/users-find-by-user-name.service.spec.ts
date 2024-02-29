import { Test, TestingModule } from '@nestjs/testing';
import { UsersFindByUserNameService } from './users-find-by-user-name.service';

describe('UsersFindByUserNameService', () => {
  let service: UsersFindByUserNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersFindByUserNameService],
    }).compile();

    service = module.get<UsersFindByUserNameService>(UsersFindByUserNameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
