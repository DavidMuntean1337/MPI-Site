"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostModule = void 0;
const common_1 = require("@nestjs/common");
const create_post_service_1 = require("./create-post.service");
const create_post_controller_1 = require("./create-post.controller");
const prisma_service_module_1 = require("../prisma-service/prisma-service.module");
let CreatePostModule = class CreatePostModule {
};
exports.CreatePostModule = CreatePostModule;
exports.CreatePostModule = CreatePostModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_service_module_1.PrismaServiceModule],
        providers: [create_post_service_1.CreatePostService],
        controllers: [create_post_controller_1.CreatePostController],
    })
], CreatePostModule);
//# sourceMappingURL=create-post.module.js.map