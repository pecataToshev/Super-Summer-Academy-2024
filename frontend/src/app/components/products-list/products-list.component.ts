import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Product } from "../../types/product";

import { ProductService } from "../../services/products.service";

import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
   selector: "app-products-list",
   standalone: true,
   imports: [CommonModule, ProductCardComponent],
   templateUrl: "./products-list.component.html",
   styleUrl: "./products-list.component.scss",
})
export class ProductsListComponent implements OnInit {
   @Input() page: number = 1;
   @Input() itemsPerPage: number = 4;

   products: Product[] | undefined = undefined;

   constructor(private productService: ProductService) {}

   ngOnInit(): void {
      this.getProducts();
   }

   getProducts(): void {
      this.productService.getAll$().subscribe({
         next: (products) => {
            this.products = products;
         },
         error: (error) => {
            console.error("There was an error!", error);
         },
      });
   }
}
