import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AndyServiceBase } from "./base/andy.service.base";

@Injectable()
export class AndyService extends AndyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
