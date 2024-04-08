import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Create an order' })
  @ApiCreatedResponse({
    description: 'The order has been successfully created.',
  })
  create(@Body() createOrder: CreateOrderDto) {
    return this.ordersService.create(createOrder);
  }

  @Get()
  @ApiOperation({ summary: 'Get all orders' })
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an order by ID' })
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.ordersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an order by ID' })
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateOrder: UpdateOrderDto,
  ) {
    return this.ordersService.update(id, updateOrder);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an order by ID' })
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.ordersService.remove(id);
  }
}
