import { Module } from '@nestjs/common';
import { BrandsModule } from './brands/brands.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, BrandsModule],
})
export class ProductsGroupModule {}
