import { PrismaServiceService } from '../prisma-service/prisma-service.service';
export declare class GetPostsService {
    prismaService: PrismaServiceService;
    constructor(prismaService: PrismaServiceService);
    getChapterPosts(chapter: string): Promise<({
        blocks: {
            type: import(".prisma/client").$Enums.BlockType;
            value: string;
            id: string;
            postId: string;
        }[];
    } & {
        id: string;
        chapter: string | null;
        createdAt: Date;
    })[]>;
    getPostById(id: string, chapter: string): Promise<({
        blocks: {
            type: import(".prisma/client").$Enums.BlockType;
            value: string;
            id: string;
            postId: string;
        }[];
    } & {
        id: string;
        chapter: string | null;
        createdAt: Date;
    }) | null>;
}
