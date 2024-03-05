import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config/dist';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Order } from '../orders/entities/order.entity';
import { ProductsService } from 'src/modules/products/products/products.service';

import configuration from 'src/config/configuration';

@Injectable()
export class UsersService {
  constructor(
    private productService: ProductsService,
    @Inject(configuration.KEY) private config: ConfigType<typeof configuration>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    const apiKey = this.config.apiKey;
    const dbName = this.config.database.name;
    console.info(apiKey, dbName);
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  getOrdersByUser(id: number): Order {
    return {
      date: new Date(Date.now()),
      user: { id },
      products: this.productService.findAll(),
    };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
