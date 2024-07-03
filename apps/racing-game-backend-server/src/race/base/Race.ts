/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  ValidateNested,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { Leaderboard } from "../../leaderboard/base/Leaderboard";
import { Andy } from "../../andy/base/Andy";
import { Score } from "../../score/base/Score";

@ObjectType()
class Race {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Leaderboard],
  })
  @ValidateNested()
  @Type(() => Leaderboard)
  @IsOptional()
  leaderboards?: Array<Leaderboard>;

  @ApiProperty({
    required: false,
    type: () => Andy,
  })
  @ValidateNested()
  @Type(() => Andy)
  @IsOptional()
  player?: Andy | null;

  @ApiProperty({
    required: false,
    type: () => [Score],
  })
  @ValidateNested()
  @Type(() => Score)
  @IsOptional()
  scores?: Array<Score>;

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
  track!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Race as Race };
