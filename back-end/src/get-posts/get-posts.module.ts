import { Module } from '@nestjs/common';
import { GetPostsController } from './get-posts.controller';
import { GetPostsService } from './get-posts.service';
import { PrismaServiceModule } from '../prisma-service/prisma-service.module';

@Module({
  imports: [PrismaServiceModule],
  controllers: [GetPostsController],
  providers: [GetPostsService],
})
export class GetPostsModule {}
