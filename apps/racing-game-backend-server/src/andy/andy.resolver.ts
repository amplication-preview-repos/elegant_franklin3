import * as graphql from "@nestjs/graphql";
import { AndyResolverBase } from "./base/andy.resolver.base";
import { Andy } from "./base/Andy";
import { AndyService } from "./andy.service";

@graphql.Resolver(() => Andy)
export class AndyResolver extends AndyResolverBase {
  constructor(protected readonly service: AndyService) {
    super(service);
  }
}
