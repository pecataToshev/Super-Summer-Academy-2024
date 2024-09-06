export type Product = {
   id: string;
   name: string;
   shortDescription: string;
   description: string;
   categoryId: string;
   price: number;
   discount?: number;
   quantity?: number;
   markAsNew?: boolean;
   coverPhoto: string;
   photos: string[];
   sizes: string[];
   colors: string[];
};
