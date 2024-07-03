/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TransferService } from "../transfer.service";
import { TransferCreateInput } from "./TransferCreateInput";
import { Transfer } from "./Transfer";
import { TransferFindManyArgs } from "./TransferFindManyArgs";
import { TransferWhereUniqueInput } from "./TransferWhereUniqueInput";
import { TransferUpdateInput } from "./TransferUpdateInput";

export class TransferControllerBase {
  constructor(protected readonly service: TransferService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Transfer })
  async createTransfer(
    @common.Body() data: TransferCreateInput
  ): Promise<Transfer> {
    return await this.service.createTransfer({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Transfer] })
  @ApiNestedQuery(TransferFindManyArgs)
  async transfers(@common.Req() request: Request): Promise<Transfer[]> {
    const args = plainToClass(TransferFindManyArgs, request.query);
    return this.service.transfers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Transfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async transfer(
    @common.Param() params: TransferWhereUniqueInput
  ): Promise<Transfer | null> {
    const result = await this.service.transfer({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Transfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTransfer(
    @common.Param() params: TransferWhereUniqueInput,
    @common.Body() data: TransferUpdateInput
  ): Promise<Transfer | null> {
    try {
      return await this.service.updateTransfer({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Transfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTransfer(
    @common.Param() params: TransferWhereUniqueInput
  ): Promise<Transfer | null> {
    try {
      return await this.service.deleteTransfer({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
