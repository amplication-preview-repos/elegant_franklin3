import { Module } from "@nestjs/common";
import { CarDataEntryService } from "./cardataentry.service";
import { CarDataEntryController } from "./cardataentry.controller";
import { CarDataEntryResolver } from "./cardataentry.resolver";

@Module({
  controllers: [CarDataEntryController],
  providers: [CarDataEntryService, CarDataEntryResolver],
  exports: [CarDataEntryService],
})
export class CarDataEntryModule {}
