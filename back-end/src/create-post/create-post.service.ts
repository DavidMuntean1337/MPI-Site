import { Injectable } from '@nestjs/common';
import { PrismaServiceService } from '../prisma-service/prisma-service.service';
import { CreatePostDto, PostBlockDto } from '../dto/create-post.dto';
import { BlockType } from '@prisma/client';

@Injectable()
export class CreatePostService {
  constructor(private readonly prismaService: PrismaServiceService) {}

  async createPost(
    blocks: PostBlockDto[],
    chapter: string,
  ): Promise<{ message: string }> {
    await this.prismaService.post.create({
      data: {
        chapter,
        blocks: {
          create: blocks.map((block) => ({
            type: block.type as BlockType,
            value: block.value,
          })),
        },
      },
      include: {
        blocks: true,
      },
    });

    return { message: `Post for chapter ${chapter} created successfully` };
  }
}
