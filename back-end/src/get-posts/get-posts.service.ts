import { Injectable } from '@nestjs/common';
import { PrismaServiceService } from '../prisma-service/prisma-service.service';

@Injectable()
export class GetPostsService {
  constructor(public prismaService: PrismaServiceService) {}

  async getChapterPosts(chapter: string) {
    console.log('Getting post with chapter:', chapter);
    console.log('Type of CHAPTER:', typeof chapter);
    const posts = await this.prismaService.post.findMany({
      where: {
        chapter: chapter,
      },
      include: {
        blocks: true,
      },
    });

    console.log('Posts:', posts);
    return posts;
  }

  async getPostById(id: string, chapter: string) {
    console.log('SERVICE got → ID:', id);
    console.log('SERVICE got → CHAPTER:', chapter);
    console.log('Type of ID:', typeof id);
    console.log('Type of CHAPTER:', typeof chapter);
    const post = await this.prismaService.post.findUnique({
      where: {
        id: id,
        chapter: chapter,
      },
      include: {
        blocks: true,
      },
    });

    console.log('Post:', post);
    return post;
  }
}
