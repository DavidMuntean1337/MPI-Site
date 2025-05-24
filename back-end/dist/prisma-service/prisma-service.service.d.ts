import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PrismaServiceService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
