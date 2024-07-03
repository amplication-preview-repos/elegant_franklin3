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
import { AndyWhereInput } from "./AndyWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AndyListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AndyWhereInput,
  })
  @ValidateNested()
  @Type(() => AndyWhereInput)
  @IsOptional()
  @Field(() => AndyWhereInput, {
    nullable: true,
  })
  every?: AndyWhereInput;

  @ApiProperty({
    required: false,
    type: () => AndyWhereInput,
  })
  @ValidateNested()
  @Type(() => AndyWhereInput)
  @IsOptional()
  @Field(() => AndyWhereInput, {
    nullable: true,
  })
  some?: AndyWhereInput;

  @ApiProperty({
    required: false,
    type: () => AndyWhereInput,
  })
  @ValidateNested()
  @Type(() => AndyWhereInput)
  @IsOptional()
  @Field(() => AndyWhereInput, {
    nullable: true,
  })
  none?: AndyWhereInput;
}
export { AndyListRelationFilter as AndyListRelationFilter };