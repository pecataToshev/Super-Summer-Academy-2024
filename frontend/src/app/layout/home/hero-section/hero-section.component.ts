import { Component } from "@angular/core";

import { AssetComponent } from "../../../common/asset/asset.component";

@Component({
   selector: "app-hero-section",
   standalone: true,
   imports: [AssetComponent],
   templateUrl: "./hero-section.component.html",
   styleUrl: "./hero-section.component.scss",
})
export class HeroSectionComponent {}
