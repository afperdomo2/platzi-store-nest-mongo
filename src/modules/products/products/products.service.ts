import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(createProduct: CreateProductDto) {
    // this.counterId++;
    // const newProduct = {
    //   id: this.counterId,
    //   ...createProduct,
    // };
    // this.products.push(newProduct);
    // return newProduct;
  }

  async findAll() {
    return await this.productModel.find().exec();
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  update(id: number, updateProduct: UpdateProductDto) {
    // const product = this.findOne(id);
    // if (!product) {
    //   return null;
    // }
    // const index = this.products.findIndex((product) => product.id === id);
    // this.products[index] = { ...product, ...updateProduct };
    // return this.products[index];
  }

  remove(id: number) {
    // const index = this.products.findIndex((product) => product.id === id);
    // if (index === -1) {
    //   throw new NotFoundException(`Product #${id} not found`);
    // }
    // this.products.splice(index, 1);
    // return true;
  }
}
