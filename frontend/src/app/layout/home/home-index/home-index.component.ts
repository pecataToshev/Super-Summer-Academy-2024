import { Component } from "@angular/core";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { SectionComponent } from "../../../components/common/section/section.component";
import { CategoriesSectionComponent } from "../categories-section/categories-section.component";
import { ProductsSectionComponent } from "../products-section/products-section.component";
import { RoomInspirationSectionComponent } from "../room-inspiration-section/room-inspiration-section.component";
import { ShareFurnitureSectionComponent } from "../share-furniture-section/share-furniture-section.component";

@Component({
   selector: "app-home-index",
   standalone: true,
   imports: [
      HeroSectionComponent,
      SectionComponent,
      CategoriesSectionComponent,
      ProductsSectionComponent,
      RoomInspirationSectionComponent,
      ShareFurnitureSectionComponent,
   ],
   templateUrl: "./home-index.component.html",
   styleUrl: "./home-index.component.scss",
})
export class HomeIndexComponent {}
