import { IsArray, IsEnum, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BlockType } from '@prisma/client';

export class PostBlockDto {
  @IsEnum(BlockType)
  type: string;

  @IsString()
  value: string;
}

export class CreatePostDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostBlockDto)
  blocks: PostBlockDto[];
}
