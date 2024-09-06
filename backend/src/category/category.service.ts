import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async findById(id: string): Promise<Category> {
    return Promise.reject('Not found ' + id);
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return Promise.reject('Not implemented');
  }

  async update({ id, data, }: {
    data: UpdateCategoryDto;
    id: string;
  }): Promise<Category> {
    return Promise.reject('Not implemented');
  }

  async delete(id: string): Promise<boolean> {
    return Promise.reject('Not implemented');
  }
}
