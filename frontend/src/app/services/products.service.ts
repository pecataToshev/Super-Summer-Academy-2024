import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Product } from "../types/product";

@Injectable({
   providedIn: "root",
})
export class ProductService {
   constructor(private http: HttpClient) {}

   getAll$(): Observable<Product[]> {
      return of([
         {
            id: "1",
            name: "Product 1",
            shortDescription: "Short description 1",
            description: "Description 1",
            categoryId: "1",
            price: 100,
            discount: 0,
            quantity: 10,
            markAsNew: true,
            coverPhoto: "https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75",
            photos: ["https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75"],
            sizes: ["S", "M", "L", "XL"],
            colors: ["#000000", "#ffffff"],
         },
         {
            id: "2",
            name: "Product 2",
            shortDescription: "Short description 2",
            description: "Description 2",
            categoryId: "2",
            price: 200,
            discount: 20,
            quantity: 20,
            markAsNew: false,
            coverPhoto: "https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75",
            photos: ["https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75"],
            sizes: ["S", "M", "L", "XL"],
            colors: ["#000000", "#ffffff"],
         },
         {
            id: "3",
            name: "Product 3",
            shortDescription: "Short description 3",
            description: "Description 3",
            categoryId: "3",
            price: 300,
            discount: 0,
            quantity: 30,
            markAsNew: true,
            coverPhoto: "https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75",
            photos: ["https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75"],
            sizes: ["S", "M", "L", "XL"],
            colors: ["#000000", "#ffffff"],
         },
         {
            id: "4",
            name: "Product 4",
            shortDescription: "Short description 4",
            description: "Description 4",
            categoryId: "4",
            price: 400,
            discount: 40,
            quantity: 40,
            markAsNew: false,
            coverPhoto: "https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75",
            photos: ["https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75"],
            sizes: ["S", "M", "L", "XL"],
            colors: ["#000000", "#ffffff"],
         },
         {
            id: "5",
            name: "Product 5",
            shortDescription: "Short description 5",
            description: "Description 5",
            categoryId: "5",
            price: 500,
            discount: 0,
            quantity: 50,
            markAsNew: false,
            coverPhoto: "https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75",
            photos: ["https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75"],
            sizes: ["S", "M", "L", "XL"],
            colors: ["#000000", "#ffffff"],
         },
         {
            id: "5",
            name: "Product 5",
            shortDescription: "Short description 5",
            description: "Description 5",
            categoryId: "5",
            price: 500,
            discount: 50,
            quantity: 50,
            markAsNew: false,
            coverPhoto: "https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75",
            photos: ["https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75"],
            sizes: ["S", "M", "L", "XL"],
            colors: ["#000000", "#ffffff"],
         },
         {
            id: "5",
            name: "Product 5",
            shortDescription: "Short description 5",
            description: "Description 5",
            categoryId: "5",
            price: 500,
            discount: 0,
            quantity: 50,
            markAsNew: false,
            coverPhoto: "https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75",
            photos: ["https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75"],
            sizes: ["S", "M", "L", "XL"],
            colors: ["#000000", "#ffffff"],
         },
         {
            id: "5",
            name: "Product 5",
            shortDescription: "Short description 5",
            description: "Description 5",
            categoryId: "5",
            price: 500,
            discount: 0,
            quantity: 50,
            markAsNew: true,
            coverPhoto: "https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75",
            photos: ["https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75"],
            sizes: ["S", "M", "L", "XL"],
            colors: ["#000000", "#ffffff"],
         },
      ]);

      // return this.http.get<Product[]>("/api/products");
   }
}
