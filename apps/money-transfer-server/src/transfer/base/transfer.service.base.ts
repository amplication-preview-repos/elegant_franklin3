/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Transfer as PrismaTransfer } from "@prisma/client";

export class TransferServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TransferCountArgs, "select">): Promise<number> {
    return this.prisma.transfer.count(args);
  }

  async transfers(
    args: Prisma.TransferFindManyArgs
  ): Promise<PrismaTransfer[]> {
    return this.prisma.transfer.findMany(args);
  }
  async transfer(
    args: Prisma.TransferFindUniqueArgs
  ): Promise<PrismaTransfer | null> {
    return this.prisma.transfer.findUnique(args);
  }
  async createTransfer(
    args: Prisma.TransferCreateArgs
  ): Promise<PrismaTransfer> {
    return this.prisma.transfer.create(args);
  }
  async updateTransfer(
    args: Prisma.TransferUpdateArgs
  ): Promise<PrismaTransfer> {
    return this.prisma.transfer.update(args);
  }
  async deleteTransfer(
    args: Prisma.TransferDeleteArgs
  ): Promise<PrismaTransfer> {
    return this.prisma.transfer.delete(args);
  }
}