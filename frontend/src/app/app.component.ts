import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "./layout/header/header.component";
import { HeroSectionComponent } from "./layout/home/hero-section/hero-section.component";
import { SectionComponent } from "./components/common/section/section.component";
import { CategoriesSectionComponent } from "./layout/home/categories-section/categories-section.component";
import { ProductsSectionComponent } from "./layout/home/products-section/products-section.component";

@Component({
   selector: "app-root",
   standalone: true,
   imports: [
      RouterOutlet,
      HeaderComponent,
      HeroSectionComponent,
      SectionComponent,
      CategoriesSectionComponent,
      ProductsSectionComponent,
   ],
   templateUrl: "./app.component.html",
   styleUrl: "./app.component.scss",
})
export class AppComponent {
   title = "Furniro";
}
