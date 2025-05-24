import { PrismaServiceService } from '../prisma-service/prisma-service.service';
import { PostBlockDto } from '../dto/create-post.dto';
export declare class CreatePostService {
    private readonly prismaService;
    constructor(prismaService: PrismaServiceService);
    createPost(blocks: PostBlockDto[], chapter: string): Promise<{
        message: string;
    }>;
}
