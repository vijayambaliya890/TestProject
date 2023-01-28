import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Prisma, Sale } from "@prisma/client";

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.SaleCreateInput): Promise<Sale> {
    return this.prisma.sale.create({data});
  }

  findAll() {
    return this.prisma.sale.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} sale`;
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}
