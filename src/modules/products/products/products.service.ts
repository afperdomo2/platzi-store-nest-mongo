import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isNumber } from 'class-validator';
import { FilterQuery, Model } from 'mongoose';

import { CreateProductDto } from './dto/create-product.dto';
import { FilterProductsDto } from './dto/filter-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(createProduct: CreateProductDto) {
    const newProduct = new this.productModel(createProduct);
    return newProduct.save();
  }

  async update(id: string, changes: UpdateProductDto) {
    const product = this.productModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async findAll(params?: FilterProductsDto) {
    const filters = this.assingFilterQuery(params);
    const { limit, offset } = params;
    if (limit && isNumber(offset)) {
      return this.productModel
        .find(filters)
        .populate('brand')
        .skip(offset)
        .limit(limit)
        .exec();
    }
    return this.productModel.find(filters).populate('brand').exec();
  }

  async findOne(id: string) {
    const product = await this.productModel
      .findById(id)
      .populate('brand')
      .exec();
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async remove(id: string) {
    return this.productModel.findByIdAndDelete(id).exec();
  }

  assingFilterQuery(params: FilterProductsDto) {
    const filters: FilterQuery<Product> = {};
    const { minPrice, maxPrice, stock, minStock, maxStock } = params;
    if (isNumber(minPrice)) {
      filters.price = { ...filters.price, $gte: minPrice };
    }
    if (maxPrice) {
      filters.price = { ...filters.price, $lte: maxPrice };
    }
    if (isNumber(stock)) {
      filters.stock = { ...filters.stock, $eq: stock };
    }
    if (isNumber(minStock)) {
      filters.stock = { ...filters.stock, $gte: minStock };
    }
    if (maxStock) {
      filters.stock = { ...filters.stock, $lte: maxStock };
    }
    return filters;
  }
}
