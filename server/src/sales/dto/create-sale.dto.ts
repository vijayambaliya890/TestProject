import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsNumber,
  ValidateNested,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";

// createdAt   DateTime @default(now())
//   customerId String
//   id          String   @id @default(cuid())
//   productId   Float?
//   totalPrice  Int?
//   orderId       String?
//   updatedAt   DateTime @updatedAt

export class CreateSaleDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, {
    nullable: false,
  })
  customerId?: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, {
    nullable: false,
  })
  productId?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  orderId?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalPrice?: number | null;
}
