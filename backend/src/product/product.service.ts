import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  CreateProductDto,
  ProductDto,
  ProductFilters,
  ShortProductDto,
} from './product.dto';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findProducts(options?: ProductFilters): Promise<ShortProductDto[]> {
    return this.prisma.product
      .findMany({
        include: {
          photos: {
            select: {
              photo: true,
            },
            where: {
              isDeleted: false,
              isCover: true,
            },
          },
        },
        where: {
          isDeleted: false,
          categoryId: options?.categoryId,
        },
        skip: (options?.page - 1) * options?.itemsPerPage || undefined,
        take: options?.itemsPerPage || undefined,
        orderBy: {
          price: options.priceSort || undefined,
        },
      })
      .then((all) =>
        all.map((d) => ({
          id: d.id,
          name: d.name,
          shortDescription: d.shortDescription,
          quantity: d.quantity,
          markAsNew: d.markAsNew,
          coverPhoto: d.photos[0]?.photo,
          price: d.price,
          discount: d.discount,
        })),
      );
  }

  private async findById(id: string): Promise<Product> {
    const product = await this.prisma.product.findMany({
      include: {
        photos: {
          select: {
            id: true,
          },
          where: {
            isDeleted: false,
            isCover: false,
          },
        },
      },
      where: { id, isDeleted: false },
    });
    if (product.length === 0) {
      throw new HttpException('Product not found', 404);
    }
    return Promise.resolve(product[0]);
  }

  async findOne(id: string): Promise<ProductDto> {
    return this.findById(id).then((d) => ({
      id: d.id,
      name: d.name,
      shortDescription: d.shortDescription,
      description: d.description,
      categoryId: d.categoryId,
      price: d.price,
      discount: d.discount,
      quantity: d.quantity,
      markAsNew: d.markAsNew,
      sizes: d.sizes,
      colors: d.colors,
      photos: (d as any)?.photos?.map((p: { id: string }) => p.id),
    }));
  }

  async create(createProductDto: CreateProductDto): Promise<ProductDto> {
    return Promise.reject({
      message: 'Not implemented for ',
      data: createProductDto,
    });
  }
}
