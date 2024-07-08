/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MapWhereInput } from "./MapWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MapOrderByInput } from "./MapOrderByInput";

@ArgsType()
class MapFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MapWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MapWhereInput, { nullable: true })
  @Type(() => MapWhereInput)
  where?: MapWhereInput;

  @ApiProperty({
    required: false,
    type: [MapOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MapOrderByInput], { nullable: true })
  @Type(() => MapOrderByInput)
  orderBy?: Array<MapOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MapFindManyArgs as MapFindManyArgs };
