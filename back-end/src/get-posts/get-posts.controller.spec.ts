import { Test, TestingModule } from '@nestjs/testing';
import { GetPostsController } from './get-posts.controller';

describe('GetPostsController', () => {
  let controller: GetPostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetPostsController],
    }).compile();

    controller = module.get<GetPostsController>(GetPostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
