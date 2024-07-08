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
import { CarService } from "../car.service";
import { CarCreateInput } from "./CarCreateInput";
import { Car } from "./Car";
import { CarFindManyArgs } from "./CarFindManyArgs";
import { CarWhereUniqueInput } from "./CarWhereUniqueInput";
import { CarUpdateInput } from "./CarUpdateInput";

export class CarControllerBase {
  constructor(protected readonly service: CarService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Car })
  async createCar(@common.Body() data: CarCreateInput): Promise<Car> {
    return await this.service.createCar({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sscTuatara: true,
        koenigseggJeskoAbsolut: true,
        speed: true,
        bugattiVeyronSuperSport: true,
        rimacCTwo: true,
        koenigseggGemera: true,
        pininfarinaBattista: true,
        porsche_918Spyder: true,
        astonMartinOne_77: true,
        bugattiChironSuperSport_300: true,
        hennesseyVenomF5: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Car] })
  @ApiNestedQuery(CarFindManyArgs)
  async cars(@common.Req() request: Request): Promise<Car[]> {
    const args = plainToClass(CarFindManyArgs, request.query);
    return this.service.cars({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sscTuatara: true,
        koenigseggJeskoAbsolut: true,
        speed: true,
        bugattiVeyronSuperSport: true,
        rimacCTwo: true,
        koenigseggGemera: true,
        pininfarinaBattista: true,
        porsche_918Spyder: true,
        astonMartinOne_77: true,
        bugattiChironSuperSport_300: true,
        hennesseyVenomF5: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Car })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async car(@common.Param() params: CarWhereUniqueInput): Promise<Car | null> {
    const result = await this.service.car({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sscTuatara: true,
        koenigseggJeskoAbsolut: true,
        speed: true,
        bugattiVeyronSuperSport: true,
        rimacCTwo: true,
        koenigseggGemera: true,
        pininfarinaBattista: true,
        porsche_918Spyder: true,
        astonMartinOne_77: true,
        bugattiChironSuperSport_300: true,
        hennesseyVenomF5: true,
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
  @swagger.ApiOkResponse({ type: Car })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCar(
    @common.Param() params: CarWhereUniqueInput,
    @common.Body() data: CarUpdateInput
  ): Promise<Car | null> {
    try {
      return await this.service.updateCar({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          sscTuatara: true,
          koenigseggJeskoAbsolut: true,
          speed: true,
          bugattiVeyronSuperSport: true,
          rimacCTwo: true,
          koenigseggGemera: true,
          pininfarinaBattista: true,
          porsche_918Spyder: true,
          astonMartinOne_77: true,
          bugattiChironSuperSport_300: true,
          hennesseyVenomF5: true,
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
  @swagger.ApiOkResponse({ type: Car })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCar(
    @common.Param() params: CarWhereUniqueInput
  ): Promise<Car | null> {
    try {
      return await this.service.deleteCar({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          sscTuatara: true,
          koenigseggJeskoAbsolut: true,
          speed: true,
          bugattiVeyronSuperSport: true,
          rimacCTwo: true,
          koenigseggGemera: true,
          pininfarinaBattista: true,
          porsche_918Spyder: true,
          astonMartinOne_77: true,
          bugattiChironSuperSport_300: true,
          hennesseyVenomF5: true,
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
