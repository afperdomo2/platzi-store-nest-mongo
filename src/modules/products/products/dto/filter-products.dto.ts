import { IsOptional, IsPositive, Min, ValidateIf } from 'class-validator';

export class FilterProductsDto {
  @ValidateIf((params) => params.offset >= 0)
  @IsPositive()
  limit?: number;

  @ValidateIf((params) => params.limit > 0)
  @Min(0)
  offset?: number;

  @IsOptional()
  @Min(0)
  minPrice?: number;

  @IsOptional()
  @IsPositive()
  maxPrice?: number;

  @IsOptional()
  @Min(0)
  stock?: number;

  @IsOptional()
  @Min(0)
  minStock?: number;

  @IsOptional()
  @IsPositive()
  maxStock?: number;
}
