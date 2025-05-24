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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostController = void 0;
const common_1 = require("@nestjs/common");
const create_post_service_1 = require("./create-post.service");
const path_1 = require("path");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
let CreatePostController = class CreatePostController {
    createPostService;
    constructor(createPostService) {
        this.createPostService = createPostService;
    }
    uploadFile(file) {
        return { url: `/uploads/${file.filename}` };
    }
    async createPost(chapter, dto) {
        console.log('Received body: ', dto);
        return this.createPostService.createPost(dto.blocks, chapter);
    }
};
exports.CreatePostController = CreatePostController;
__decorate([
    (0, common_1.Post)('uploads'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, `${uniqueSuffix}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CreatePostController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)(':chapter'),
    __param(0, (0, common_1.Param)('chapter')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CreatePostController.prototype, "createPost", null);
exports.CreatePostController = CreatePostController = __decorate([
    (0, common_1.Controller)('admin/create-post'),
    __metadata("design:paramtypes", [create_post_service_1.CreatePostService])
], CreatePostController);
//# sourceMappingURL=create-post.controller.js.map