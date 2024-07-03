import { Module } from "@nestjs/common";
import { AndyModuleBase } from "./base/andy.module.base";
import { AndyService } from "./andy.service";
import { AndyController } from "./andy.controller";
import { AndyResolver } from "./andy.resolver";

@Module({
  imports: [AndyModuleBase],
  controllers: [AndyController],
  providers: [AndyService, AndyResolver],
  exports: [AndyService],
})
export class AndyModule {}
