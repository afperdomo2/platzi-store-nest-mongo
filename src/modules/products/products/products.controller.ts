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
  Query,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { FilterProductsDto } from './dto/filter-products.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a product' })
  @ApiCreatedResponse({
    description: 'The product has been successfully created.',
  })
  create(@Body() createProduct: CreateProductDto) {
    return this.productsService.create(createProduct);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  findAll(@Query() params: FilterProductsDto) {
    return this.productsService.findAll(params);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product by ID' })
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a product by ID' })
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateProduct: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProduct);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product by ID' })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.productsService.remove(id);
  }
}
