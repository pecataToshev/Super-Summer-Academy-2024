import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  CreateProductDto,
  ProductDto,
  ProductFilters,
  ShortProductDto,
} from './product.dto';
import { Product } from '@prisma/client';
import { PaginationDto } from '../common/common.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findProducts(
    options?: ProductFilters,
  ): Promise<PaginationDto<ShortProductDto>> {
    const where = {
      isDeleted: false,
      categoryId: options?.categoryId,
    };
    const [totalItems, data] = await Promise.all([
      this.prisma.product.count({ where }),
      this.prisma.product.findMany({
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
        where,
        skip:
          (parseInt(options?.page) - 1) * parseInt(options?.itemsPerPage) ||
          undefined,
        take: parseInt(options?.itemsPerPage) || undefined,
        orderBy: {
          price: options.priceSort || undefined,
        },
      }),
    ]);
    return Promise.resolve({
      totalItems,
      pageNumber: parseInt(options?.page) || 1,
      itemsPerPage: parseInt(options?.itemsPerPage) || data.length,
      items: data.map((d) => ({
        id: d.id,
        name: d.name,
        shortDescription: d.shortDescription,
        quantity: d.quantity,
        markAsNew: d.markAsNew,
        coverPhoto: d.photos[0]?.photo,
        price: d.price,
        discount: d.discount,
      })),
    });
  }

  private async findById(id: string): Promise<Product> {
    const product = await this.prisma.product.findMany({
      where: { id, isDeleted: false },
    });
    if (product.length === 0) {
      throw new HttpException('Product not found', 404);
    }
    return Promise.resolve(product[0]);
  }

  async findOne(id: string): Promise<ProductDto> {
    const [product, reviews, photos] = await Promise.all([
      this.findById(id),
      this.prisma.review.aggregate({
        _avg: {
          value: true,
        },
        _count: true,
        where: {
          productId: id,
        },
      }),
      this.prisma.productPhoto.findMany({
        select: {
          photo: true,
          isCover: true,
        },
        where: {
          productId: id,
        },
      }),
    ]);

    return Promise.resolve({
      ...product,
      photos,
      reviewsTotalCount: reviews._count,
      reviewsAverageMark: reviews._avg.value,
    });
  }

  async create(createProductDto: CreateProductDto): Promise<ProductDto> {
    return Promise.reject({
      message: 'Not implemented for ',
      data: createProductDto,
    });
  }
}
