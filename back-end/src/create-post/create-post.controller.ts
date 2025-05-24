import {
  Body,
  Controller, Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreatePostService } from './create-post.service';
import { CreatePostDto, PostBlockDto } from '../dto/create-post.dto';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('admin/create-post')
export class CreatePostController {
  constructor(private readonly createPostService: CreatePostService) {}

  @Post('uploads')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return { url: `/uploads/${file.filename}` };
  }

  @Post(':chapter')
  async createPost(
    @Param('chapter') chapter: string,
    @Body() dto: { blocks: PostBlockDto[] },
  ) {
    console.log('Received body: ', dto);
    return this.createPostService.createPost(dto.blocks, chapter);
  }
}
