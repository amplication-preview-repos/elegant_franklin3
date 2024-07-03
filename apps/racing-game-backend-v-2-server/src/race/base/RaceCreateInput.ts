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
import {
  IsDate,
  IsOptional,
  ValidateNested,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { LeaderboardCreateNestedManyWithoutRacesInput } from "./LeaderboardCreateNestedManyWithoutRacesInput";
import { PlayerWhereUniqueInput } from "../../player/base/PlayerWhereUniqueInput";
import { ScoreCreateNestedManyWithoutRacesInput } from "./ScoreCreateNestedManyWithoutRacesInput";

@InputType()
class RaceCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: () => LeaderboardCreateNestedManyWithoutRacesInput,
  })
  @ValidateNested()
  @Type(() => LeaderboardCreateNestedManyWithoutRacesInput)
  @IsOptional()
  @Field(() => LeaderboardCreateNestedManyWithoutRacesInput, {
    nullable: true,
  })
  leaderboards?: LeaderboardCreateNestedManyWithoutRacesInput;

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
  player?: PlayerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ScoreCreateNestedManyWithoutRacesInput,
  })
  @ValidateNested()
  @Type(() => ScoreCreateNestedManyWithoutRacesInput)
  @IsOptional()
  @Field(() => ScoreCreateNestedManyWithoutRacesInput, {
    nullable: true,
  })
  scores?: ScoreCreateNestedManyWithoutRacesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  track?: string | null;
}

export { RaceCreateInput as RaceCreateInput };