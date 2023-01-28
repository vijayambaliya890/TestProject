import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { PrismaService } from 'nestjs-prisma';

@Module({
  controllers: [SalesController],
  providers: [SalesService,PrismaService],
})
export class SalesModule {}
