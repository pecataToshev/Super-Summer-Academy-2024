import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
   selector: "app-categories-section",
   standalone: true,
   imports: [CommonModule],
   templateUrl: "./categories-section.component.html",
   styleUrl: "./categories-section.component.scss",
})
export class CategoriesSectionComponent {
   categories = [
      {
         coverPhoto: "https://www.furniro.shop/_next/image?url=%2FDining.png&w=828&q=75",
         name: "Dining",
      },
      {
         coverPhoto: "https://www.furniro.shop/_next/image?url=%2FLiving.png&w=828&q=75",
         name: "Living",
      },
      {
         coverPhoto: "https://www.furniro.shop/_next/image?url=%2FBedroom.png&w=828&q=75",
         name: "Bedroom",
      },
   ];
}
