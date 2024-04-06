import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './schemas/customer.schema';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  async create(data: CreateCustomerDto) {
    const newCustomer = new this.customerModel(data);
    return newCustomer.save();
  }

  async update(id: string, changes: UpdateCustomerDto) {
    const customer = this.customerModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!customer) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    return customer;
  }

  async findAll() {
    return this.customerModel.find().exec();
  }

  async findOne(id: string) {
    const customer = await this.customerModel.findById(id).exec();
    if (!customer) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    return customer;
  }

  async remove(id: string) {
    return this.customerModel.findByIdAndDelete(id).exec();
  }
}
