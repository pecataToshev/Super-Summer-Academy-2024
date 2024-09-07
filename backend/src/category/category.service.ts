import { HttpException, Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import {
  CategoryDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from './category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<CategoryDto[]> {
    return this.prisma.category
      .findMany({
        where: {
          isDeleted: false,
        },
      })
      .then((x) => x.map((y) => new CategoryDto(y)));
  }

  async findOne(id: string): Promise<CategoryDto> {
    return this.findById(id).then((x) => new CategoryDto(x));
  }

  private async findById(id: string): Promise<Category> {
    const category = await this.prisma.category.findMany({
      where: { id, isDeleted: false },
    });
    if (category.length === 0) {
      throw new HttpException('Category not found', 404);
    }
    return Promise.resolve(category[0]);
  }

  async create({ name, coverPhoto }: CreateCategoryDto): Promise<CategoryDto> {
    const hasData = await this.prisma.category.findMany({
      where: { name, isDeleted: false },
    });
    if (hasData.length > 0) {
      throw new HttpException('Category already exists', 400);
    }
    return this.prisma.category
      .create({ data: { name, coverPhoto } })
      .then((x) => new CategoryDto(x));
  }

  async update({
    id,
    data: { name, coverPhoto },
  }: {
    data: UpdateCategoryDto;
    id: string;
  }): Promise<CategoryDto> {
    const category = await this.findById(id);
    const nameExists = await this.prisma.category.findMany({
      where: {
        name,
        isDeleted: false,
        id: { not: id },
      },
    });
    if (nameExists.length > 0) {
      throw new HttpException('Category already exists', 400);
    }
    return this.prisma.category
      .update({
        where: { id },
        data: { ...category, name, coverPhoto },
      })
      .then((x) => new CategoryDto(x));
  }

  async delete(id: string): Promise<boolean> {
    await this.findById(id);
    const result = await this.prisma.category.update({
      where: { id },
      data: { isDeleted: true },
    });
    return Promise.resolve(Boolean(result));
  }
}
