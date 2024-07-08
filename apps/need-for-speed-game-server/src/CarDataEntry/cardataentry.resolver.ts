import * as graphql from "@nestjs/graphql";
import { CarCreateInput } from "../car/base/CarCreateInput";
import { CarDataEntryService } from "./cardataentry.service";

export class CarDataEntryResolver {
  constructor(protected readonly service: CarDataEntryService) {}

  @graphql.Mutation(() => CarCreateInput)
  async AddAstonMartinOne77(
    @graphql.Args()
    args: CarCreateInput
  ): Promise<CarCreateInput> {
    return this.service.AddAstonMartinOne77(args);
  }

  @graphql.Mutation(() => CarCreateInput)
  async AddBugattiChironSuperSport300Plus(
    @graphql.Args()
    args: CarCreateInput
  ): Promise<CarCreateInput> {
    return this.service.AddBugattiChironSuperSport300Plus(args);
  }

  @graphql.Mutation(() => CarCreateInput)
  async AddBugattiVeyronSuperSport(
    @graphql.Args()
    args: CarCreateInput
  ): Promise<CarCreateInput> {
    return this.service.AddBugattiVeyronSuperSport(args);
  }

  @graphql.Mutation(() => CarCreateInput)
  async AddCarRecord(
    @graphql.Args()
    args: CarCreateInput
  ): Promise<CarCreateInput> {
    return this.service.AddCarRecord(args);
  }

  @graphql.Mutation(() => CarCreateInput)
  async AddHennesseyVenomF5(
    @graphql.Args()
    args: CarCreateInput
  ): Promise<CarCreateInput> {
    return this.service.AddHennesseyVenomF5(args);
  }

  @graphql.Mutation(() => CarCreateInput)
  async AddKoenigseggGemera(
    @graphql.Args()
    args: CarCreateInput
  ): Promise<CarCreateInput> {
    return this.service.AddKoenigseggGemera(args);
  }

  @graphql.Mutation(() => CarCreateInput)
  async AddKoenigseggJeskoAbsolut(
    @graphql.Args()
    args: CarCreateInput
  ): Promise<CarCreateInput> {
    return this.service.AddKoenigseggJeskoAbsolut(args);
  }

  @graphql.Mutation(() => CarCreateInput)
  async AddPininfarinaBattista(
    @graphql.Args()
    args: CarCreateInput
  ): Promise<CarCreateInput> {
    return this.service.AddPininfarinaBattista(args);
  }

  @graphql.Mutation(() => CarCreateInput)
  async AddPorsche918Spyder(
    @graphql.Args()
    args: CarCreateInput
  ): Promise<CarCreateInput> {
    return this.service.AddPorsche918Spyder(args);
  }

  @graphql.Mutation(() => CarCreateInput)
  async AddRimacCTwo(
    @graphql.Args()
    args: CarCreateInput
  ): Promise<CarCreateInput> {
    return this.service.AddRimacCTwo(args);
  }

  @graphql.Mutation(() => CarCreateInput)
  async AddSscTuatara(
    @graphql.Args()
    args: CarCreateInput
  ): Promise<CarCreateInput> {
    return this.service.AddSscTuatara(args);
  }
}
