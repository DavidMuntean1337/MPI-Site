import { GetPostsService } from './get-posts.service';
export declare class GetPostsController {
    getPostsService: GetPostsService;
    constructor(getPostsService: GetPostsService);
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
    getPostById(chapter: string, id: string): Promise<({
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
