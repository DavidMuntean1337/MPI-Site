import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreatePostModule } from './create-post/create-post.module';
import { PrismaServiceModule } from './prisma-service/prisma-service.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GetPostsModule } from './get-posts/get-posts.module';

@Module({
  imports: [
    CreatePostModule,
    PrismaServiceModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    GetPostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
