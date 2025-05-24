import { Module } from '@nestjs/common';
import { CreatePostService } from './create-post.service';
import { CreatePostController } from './create-post.controller';
import { PrismaServiceModule } from '../prisma-service/prisma-service.module';

@Module({
  imports: [PrismaServiceModule],
  providers: [CreatePostService],
  controllers: [CreatePostController],
})
export class CreatePostModule {}
