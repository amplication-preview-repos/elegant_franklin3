/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Beneficiary } from "./Beneficiary";
import { BeneficiaryCountArgs } from "./BeneficiaryCountArgs";
import { BeneficiaryFindManyArgs } from "./BeneficiaryFindManyArgs";
import { BeneficiaryFindUniqueArgs } from "./BeneficiaryFindUniqueArgs";
import { DeleteBeneficiaryArgs } from "./DeleteBeneficiaryArgs";
import { BeneficiaryService } from "../beneficiary.service";
@graphql.Resolver(() => Beneficiary)
export class BeneficiaryResolverBase {
  constructor(protected readonly service: BeneficiaryService) {}

  async _beneficiariesMeta(
    @graphql.Args() args: BeneficiaryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Beneficiary])
  async beneficiaries(
    @graphql.Args() args: BeneficiaryFindManyArgs
  ): Promise<Beneficiary[]> {
    return this.service.beneficiaries(args);
  }

  @graphql.Query(() => Beneficiary, { nullable: true })
  async beneficiary(
    @graphql.Args() args: BeneficiaryFindUniqueArgs
  ): Promise<Beneficiary | null> {
    const result = await this.service.beneficiary(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Beneficiary)
  async deleteBeneficiary(
    @graphql.Args() args: DeleteBeneficiaryArgs
  ): Promise<Beneficiary | null> {
    try {
      return await this.service.deleteBeneficiary(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}