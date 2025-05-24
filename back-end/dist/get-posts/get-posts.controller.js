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
exports.GetPostsController = void 0;
const common_1 = require("@nestjs/common");
const get_posts_service_1 = require("./get-posts.service");
let GetPostsController = class GetPostsController {
    getPostsService;
    constructor(getPostsService) {
        this.getPostsService = getPostsService;
    }
    async getChapterPosts(chapter) {
        return await this.getPostsService.getChapterPosts(chapter.trim());
    }
    async getPostById(chapter, id) {
        console.log('From controller → Chapter:', chapter, 'ID:', id);
        return await this.getPostsService.getPostById(id.trim(), chapter.trim());
    }
};
exports.GetPostsController = GetPostsController;
__decorate([
    (0, common_1.Get)(':chapter'),
    __param(0, (0, common_1.Param)('chapter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GetPostsController.prototype, "getChapterPosts", null);
__decorate([
    (0, common_1.Get)(':chapter/:id'),
    __param(0, (0, common_1.Param)('chapter')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GetPostsController.prototype, "getPostById", null);
exports.GetPostsController = GetPostsController = __decorate([
    (0, common_1.Controller)('get-posts'),
    __metadata("design:paramtypes", [get_posts_service_1.GetPostsService])
], GetPostsController);
//# sourceMappingURL=get-posts.controller.js.map