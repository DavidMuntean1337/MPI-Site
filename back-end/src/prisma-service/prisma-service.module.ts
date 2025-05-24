import { Module } from '@nestjs/common';
import { PrismaServiceService } from './prisma-service.service';

@Module({
  providers: [PrismaServiceService],
  exports: [PrismaServiceService],
})
export class PrismaServiceModule {}
