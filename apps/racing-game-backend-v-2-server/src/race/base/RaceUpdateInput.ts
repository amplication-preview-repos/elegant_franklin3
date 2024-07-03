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
import { LeaderboardUpdateManyWithoutRacesInput } from "./LeaderboardUpdateManyWithoutRacesInput";
import { PlayerWhereUniqueInput } from "../../player/base/PlayerWhereUniqueInput";
import { ScoreUpdateManyWithoutRacesInput } from "./ScoreUpdateManyWithoutRacesInput";

@InputType()
class RaceUpdateInput {
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
    type: () => LeaderboardUpdateManyWithoutRacesInput,
  })
  @ValidateNested()
  @Type(() => LeaderboardUpdateManyWithoutRacesInput)
  @IsOptional()
  @Field(() => LeaderboardUpdateManyWithoutRacesInput, {
    nullable: true,
  })
  leaderboards?: LeaderboardUpdateManyWithoutRacesInput;

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
    type: () => ScoreUpdateManyWithoutRacesInput,
  })
  @ValidateNested()
  @Type(() => ScoreUpdateManyWithoutRacesInput)
  @IsOptional()
  @Field(() => ScoreUpdateManyWithoutRacesInput, {
    nullable: true,
  })
  scores?: ScoreUpdateManyWithoutRacesInput;

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

export { RaceUpdateInput as RaceUpdateInput };
