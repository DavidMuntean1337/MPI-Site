import { Test, TestingModule } from '@nestjs/testing';
import { GetPostsService } from './get-posts.service';

describe('GetPostsService', () => {
  let service: GetPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetPostsService],
    }).compile();

    service = module.get<GetPostsService>(GetPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
