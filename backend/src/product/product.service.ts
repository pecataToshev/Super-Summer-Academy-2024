import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  async findProducts(): Promise<Product[]> {
    return [];
  }

  async createProduct(): Promise<Product> {
    return Promise.reject();
  }
}
