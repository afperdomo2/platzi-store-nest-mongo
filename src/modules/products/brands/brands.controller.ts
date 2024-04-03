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
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a brand' })
  @ApiCreatedResponse({
    description: 'The brand has been successfully created.',
  })
  create(@Body() createBrand: CreateBrandDto) {
    return this.brandsService.create(createBrand);
  }

  @Get()
  @ApiOperation({ summary: 'Get all brands' })
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a brand by ID' })
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.brandsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a brand by ID' })
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateBrand: UpdateBrandDto,
  ) {
    return this.brandsService.update(id, updateBrand);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a brand by ID' })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.brandsService.remove(id);
  }
}
