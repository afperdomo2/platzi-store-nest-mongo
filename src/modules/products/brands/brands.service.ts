import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './schemas/brand.schema';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  async create(createBrandDto: CreateBrandDto) {
    const newBrand = new this.brandModel(createBrandDto);
    return newBrand.save();
  }

  async update(id: string, changes: UpdateBrandDto) {
    const brand = this.brandModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return brand;
  }

  async findAll() {
    return this.brandModel.find().exec();
  }

  async findOne(id: string) {
    const brand = await this.brandModel.findById(id).exec();
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return brand;
  }

  remove(id: string) {
    return this.brandModel.findByIdAndDelete(id).exec();
  }
}
