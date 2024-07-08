/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RaceWhereInput } from "./RaceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RaceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RaceWhereInput,
  })
  @ValidateNested()
  @Type(() => RaceWhereInput)
  @IsOptional()
  @Field(() => RaceWhereInput, {
    nullable: true,
  })
  every?: RaceWhereInput;

  @ApiProperty({
    required: false,
    type: () => RaceWhereInput,
  })
  @ValidateNested()
  @Type(() => RaceWhereInput)
  @IsOptional()
  @Field(() => RaceWhereInput, {
    nullable: true,
  })
  some?: RaceWhereInput;

  @ApiProperty({
    required: false,
    type: () => RaceWhereInput,
  })
  @ValidateNested()
  @Type(() => RaceWhereInput)
  @IsOptional()
  @Field(() => RaceWhereInput, {
    nullable: true,
  })
  none?: RaceWhereInput;
}
export { RaceListRelationFilter as RaceListRelationFilter };
