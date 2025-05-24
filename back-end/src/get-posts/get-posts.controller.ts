import { Controller, Get, Param } from '@nestjs/common';
import { GetPostsService } from './get-posts.service';

@Controller('get-posts')
export class GetPostsController {
  constructor(public getPostsService: GetPostsService) {}

  @Get(':chapter')
  async getChapterPosts(@Param('chapter') chapter: string) {
    return await this.getPostsService.getChapterPosts(chapter.trim());
  }

  @Get(':chapter/:id')
  async getPostById(
    @Param('chapter') chapter: string,
    @Param('id') id: string,
  ) {
    console.log('From controller → Chapter:', chapter, 'ID:', id);
    return await this.getPostsService.getPostById(id.trim(), chapter.trim());
  }
}
