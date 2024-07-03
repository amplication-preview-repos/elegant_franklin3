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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { AndyWhereUniqueInput } from "../../andy/base/AndyWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RaceWhereUniqueInput } from "../../race/base/RaceWhereUniqueInput";

@InputType()
class LeaderboardWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => AndyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AndyWhereUniqueInput)
  @IsOptional()
  @Field(() => AndyWhereUniqueInput, {
    nullable: true,
  })
  player?: AndyWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  position?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RaceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RaceWhereUniqueInput)
  @IsOptional()
  @Field(() => RaceWhereUniqueInput, {
    nullable: true,
  })
  race?: RaceWhereUniqueInput;
}

export { LeaderboardWhereInput as LeaderboardWhereInput };
