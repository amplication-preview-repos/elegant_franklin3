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
import { PlayerWhereUniqueInput } from "../../player/base/PlayerWhereUniqueInput";
import { RaceWhereUniqueInput } from "../../race/base/RaceWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

@InputType()
class ScoreWhereInput {
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
    type: () => PlayerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlayerWhereUniqueInput)
  @IsOptional()
  @Field(() => PlayerWhereUniqueInput, {
    nullable: true,
  })
  player?: PlayerWhereUniqueInput;

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

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  value?: IntNullableFilter;
}

export { ScoreWhereInput as ScoreWhereInput };
