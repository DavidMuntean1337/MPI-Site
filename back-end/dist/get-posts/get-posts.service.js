"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPostsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_service_1 = require("../prisma-service/prisma-service.service");
let GetPostsService = class GetPostsService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getChapterPosts(chapter) {
        console.log('Getting post with chapter:', chapter);
        console.log('Type of CHAPTER:', typeof chapter);
        const posts = await this.prismaService.post.findMany({
            where: {
                chapter: chapter,
            },
            include: {
                blocks: true,
            },
        });
        console.log('Posts:', posts);
        return posts;
    }
    async getPostById(id, chapter) {
        console.log('SERVICE got → ID:', id);
        console.log('SERVICE got → CHAPTER:', chapter);
        console.log('Type of ID:', typeof id);
        console.log('Type of CHAPTER:', typeof chapter);
        const post = await this.prismaService.post.findUnique({
            where: {
                id: id,
                chapter: chapter,
            },
            include: {
                blocks: true,
            },
        });
        console.log('Post:', post);
        return post;
    }
};
exports.GetPostsService = GetPostsService;
exports.GetPostsService = GetPostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_service_1.PrismaServiceService])
], GetPostsService);
//# sourceMappingURL=get-posts.service.js.map