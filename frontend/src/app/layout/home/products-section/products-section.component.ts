import { Component } from "@angular/core";

import { ProductsListComponent } from "../../../components/products-list/products-list.component";
import { ButtonComponent } from "../../../components/common/button/button.component";

@Component({
   selector: "app-products-section",
   standalone: true,
   imports: [ProductsListComponent, ButtonComponent],
   templateUrl: "./products-section.component.html",
   styleUrl: "./products-section.component.scss",
})
export class ProductsSectionComponent {}
