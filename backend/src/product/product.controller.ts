import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateProductDto,
  ProductDto,
  ProductFilters,
  ShortProductDto,
  UpdateProductDto,
} from './product.dto';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(@Query() options?: ProductFilters): Promise<ShortProductDto[]> {
    return this.productService.findProducts(options);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductDto> {
    return this.productService.findOne(id);
  }

  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ProductDto> {
    return this.productService.create(createProductDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<ProductDto> {
    console.log(id, updateProductDto);
    return Promise.reject('Not implemented');
    // return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    console.log(id);
    return Promise.reject('Not implemented');
    // return this.productService.remove(id);
  }
}
