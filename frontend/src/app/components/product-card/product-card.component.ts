import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Product } from "../../types/product";
import { ButtonComponent } from "../common/button/button.component";
import { AssetComponent } from "../common/asset/asset.component";

@Component({
   selector: "app-product-card",
   standalone: true,
   imports: [CommonModule, ButtonComponent, AssetComponent],
   templateUrl: "./product-card.component.html",
   styleUrl: "./product-card.component.scss",
})
export class ProductCardComponent {
   @Input() product: Product = {
      id: "1",
      name: "Product 1",
      shortDescription: "Short description 1",
      description: "Description 1",
      categoryId: "1",
      price: 100,
      discount: 10,
      quantity: 10,
      markAsNew: true,
      coverPhoto: "https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75",
      photos: ["https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75"],
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff"],
   };
}
