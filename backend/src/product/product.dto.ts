export class ProductFilters {
  categoryId?: string;
}

export class CreateProductDto {
  name: string;
  shortDescription: string;
  description: string;
  categoryId: string;
  price: number;
  discount?: number;
  quantity: number;
  markAsNew: boolean;
  sizes: string[];
  colors: string[];
}

export class UpdateProductDto {
  name?: string;
  shortDescription?: string;
  description?: string;
  categoryId?: string;
  price?: number;
  discount?: number;
  quantity?: number;
  markAsNew?: boolean;
  coverPhoto?: string;
  sizes?: string[];
  colors?: string[];
}

export class ShortProductDto {
  id: string;
  name: string;
  shortDescription: string;
  quantity: number;
  markAsNew: boolean;
  coverPhoto: string;
  price: number;
}

export class ProductDto {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  categoryId: string;
  price: number;
  discount?: number;
  quantity: number;
  markAsNew: boolean;
  sizes: string[];
  colors: string[];
}
