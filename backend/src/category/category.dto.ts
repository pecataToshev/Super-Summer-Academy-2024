import { Category } from '@prisma/client';

export class CreateCategoryDto {
  name: string;
  coverPhoto: string;
}

export class UpdateCategoryDto {
  name: string;
  coverPhoto: string;
}

export class CategoryDto {
  id: string;
  name: string;
  coverPhoto: string;
  constructor(category: Category) {
    this.id = category.id;
    this.name = category.name;
    this.coverPhoto = category.coverPhoto;
  }
}
