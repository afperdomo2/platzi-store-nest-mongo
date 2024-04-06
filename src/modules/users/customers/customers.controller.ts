import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a customer' })
  @ApiCreatedResponse({
    description: 'The customer has been successfully created.',
  })
  create(@Body() createCustomer: CreateCustomerDto) {
    return this.customersService.create(createCustomer);
  }

  @Get()
  @ApiOperation({ summary: 'Get all customers' })
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a customer by ID' })
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.customersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a customer by ID' })
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateCustomer: UpdateCustomerDto,
  ) {
    return this.customersService.update(id, updateCustomer);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a customer by ID' })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.customersService.remove(id);
  }
}
