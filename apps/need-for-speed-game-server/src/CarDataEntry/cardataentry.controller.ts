import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CarDataEntryService } from "./cardataentry.service";
import { CarCreateInput } from "../car/base/CarCreateInput";

@swagger.ApiTags("carDataEntries")
@common.Controller("carDataEntries")
export class CarDataEntryController {
  constructor(protected readonly service: CarDataEntryService) {}

  @common.Post("/aston-martin-one-77")
  @swagger.ApiOkResponse({
    type: CarCreateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddAstonMartinOne77(
    @common.Body()
    body: CarCreateInput
  ): Promise<CarCreateInput> {
        return this.service.AddAstonMartinOne77(body);
      }

  @common.Post("/bugatti-chiron-super-sport-300-plus")
  @swagger.ApiOkResponse({
    type: CarCreateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddBugattiChironSuperSport300Plus(
    @common.Body()
    body: CarCreateInput
  ): Promise<CarCreateInput> {
        return this.service.AddBugattiChironSuperSport300Plus(body);
      }

  @common.Post("/bugatti-veyron-super-sport")
  @swagger.ApiOkResponse({
    type: CarCreateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddBugattiVeyronSuperSport(
    @common.Body()
    body: CarCreateInput
  ): Promise<CarCreateInput> {
        return this.service.AddBugattiVeyronSuperSport(body);
      }

  @common.Post("/car-records")
  @swagger.ApiOkResponse({
    type: CarCreateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddCarRecord(
    @common.Body()
    body: CarCreateInput
  ): Promise<CarCreateInput> {
        return this.service.AddCarRecord(body);
      }

  @common.Post("/hennessey-venom-f5")
  @swagger.ApiOkResponse({
    type: CarCreateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddHennesseyVenomF5(
    @common.Body()
    body: CarCreateInput
  ): Promise<CarCreateInput> {
        return this.service.AddHennesseyVenomF5(body);
      }

  @common.Post("/koenigsegg-gemera")
  @swagger.ApiOkResponse({
    type: CarCreateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddKoenigseggGemera(
    @common.Body()
    body: CarCreateInput
  ): Promise<CarCreateInput> {
        return this.service.AddKoenigseggGemera(body);
      }

  @common.Post("/koenigsegg-jesko-absolut")
  @swagger.ApiOkResponse({
    type: CarCreateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddKoenigseggJeskoAbsolut(
    @common.Body()
    body: CarCreateInput
  ): Promise<CarCreateInput> {
        return this.service.AddKoenigseggJeskoAbsolut(body);
      }

  @common.Post("/pininfarina-battista")
  @swagger.ApiOkResponse({
    type: CarCreateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddPininfarinaBattista(
    @common.Body()
    body: CarCreateInput
  ): Promise<CarCreateInput> {
        return this.service.AddPininfarinaBattista(body);
      }

  @common.Post("/porsche-918-spyder")
  @swagger.ApiOkResponse({
    type: CarCreateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddPorsche918Spyder(
    @common.Body()
    body: CarCreateInput
  ): Promise<CarCreateInput> {
        return this.service.AddPorsche918Spyder(body);
      }

  @common.Post("/rimac-c-two")
  @swagger.ApiOkResponse({
    type: CarCreateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddRimacCTwo(
    @common.Body()
    body: CarCreateInput
  ): Promise<CarCreateInput> {
        return this.service.AddRimacCTwo(body);
      }

  @common.Post("/ssc-tuatara")
  @swagger.ApiOkResponse({
    type: CarCreateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddSscTuatara(
    @common.Body()
    body: CarCreateInput
  ): Promise<CarCreateInput> {
        return this.service.AddSscTuatara(body);
      }
}
