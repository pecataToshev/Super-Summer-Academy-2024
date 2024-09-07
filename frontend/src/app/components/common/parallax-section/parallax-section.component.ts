import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AssetComponent } from "../asset/asset.component";

@Component({
   selector: "app-parallax-section",
   standalone: true,
   imports: [CommonModule, AssetComponent],
   templateUrl: "./parallax-section.component.html",
   styleUrl: "./parallax-section.component.scss",
})
export class ParallaxSectionComponent {
   @Input() title: string = "";
   @Input() paths: {
      text: string;
      href: string;
   }[] = [];
}
