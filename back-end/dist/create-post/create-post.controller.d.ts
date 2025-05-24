import { CreatePostService } from './create-post.service';
import { PostBlockDto } from '../dto/create-post.dto';
export declare class CreatePostController {
    private readonly createPostService;
    constructor(createPostService: CreatePostService);
    uploadFile(file: Express.Multer.File): {
        url: string;
    };
    createPost(chapter: string, dto: {
        blocks: PostBlockDto[];
    }): Promise<{
        message: string;
    }>;
}
