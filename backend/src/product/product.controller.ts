import { Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findProducts(): Promise<Product[]> {
    return this.productService.findProducts();
  }

  @Post()
  async createProduct(): Promise<Product> {
    return this.productService.createProduct();
  }
}
