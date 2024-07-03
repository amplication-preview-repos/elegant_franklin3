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
  IsString,
  IsOptional,
  ValidateNested,
  MaxLength,
} from "class-validator";
import { LeaderboardUpdateManyWithoutAndiesInput } from "./LeaderboardUpdateManyWithoutAndiesInput";
import { Type } from "class-transformer";
import { RaceUpdateManyWithoutAndiesInput } from "./RaceUpdateManyWithoutAndiesInput";
import { ScoreUpdateManyWithoutAndiesInput } from "./ScoreUpdateManyWithoutAndiesInput";

@InputType()
class AndyUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => LeaderboardUpdateManyWithoutAndiesInput,
  })
  @ValidateNested()
  @Type(() => LeaderboardUpdateManyWithoutAndiesInput)
  @IsOptional()
  @Field(() => LeaderboardUpdateManyWithoutAndiesInput, {
    nullable: true,
  })
  leaderboards?: LeaderboardUpdateManyWithoutAndiesInput;

  @ApiProperty({
    required: false,
    type: () => RaceUpdateManyWithoutAndiesInput,
  })
  @ValidateNested()
  @Type(() => RaceUpdateManyWithoutAndiesInput)
  @IsOptional()
  @Field(() => RaceUpdateManyWithoutAndiesInput, {
    nullable: true,
  })
  races?: RaceUpdateManyWithoutAndiesInput;

  @ApiProperty({
    required: false,
    type: () => ScoreUpdateManyWithoutAndiesInput,
  })
  @ValidateNested()
  @Type(() => ScoreUpdateManyWithoutAndiesInput)
  @IsOptional()
  @Field(() => ScoreUpdateManyWithoutAndiesInput, {
    nullable: true,
  })
  scores?: ScoreUpdateManyWithoutAndiesInput;

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
  username?: string | null;
}

export { AndyUpdateInput as AndyUpdateInput };