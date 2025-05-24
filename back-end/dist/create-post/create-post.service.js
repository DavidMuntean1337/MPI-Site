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
exports.CreatePostService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_service_1 = require("../prisma-service/prisma-service.service");
let CreatePostService = class CreatePostService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createPost(blocks, chapter) {
        await this.prismaService.post.create({
            data: {
                chapter,
                blocks: {
                    create: blocks.map((block) => ({
                        type: block.type,
                        value: block.value,
                    })),
                },
            },
            include: {
                blocks: true,
            },
        });
        return { message: `Post for chapter ${chapter} created successfully` };
    }
};
exports.CreatePostService = CreatePostService;
exports.CreatePostService = CreatePostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_service_1.PrismaServiceService])
], CreatePostService);
//# sourceMappingURL=create-post.service.js.map