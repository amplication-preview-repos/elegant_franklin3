import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AndyService } from "./andy.service";
import { AndyControllerBase } from "./base/andy.controller.base";

@swagger.ApiTags("andies")
@common.Controller("andies")
export class AndyController extends AndyControllerBase {
  constructor(protected readonly service: AndyService) {
    super(service);
  }
}
