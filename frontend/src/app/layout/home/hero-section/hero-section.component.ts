import { Component } from "@angular/core";

import { AssetComponent } from "../../../components/common/asset/asset.component";
import { ButtonComponent } from "../../../components/common/button/button.component";

@Component({
   selector: "app-hero-section",
   standalone: true,
   imports: [AssetComponent, ButtonComponent],
   templateUrl: "./hero-section.component.html",
   styleUrl: "./hero-section.component.scss",
})
export class HeroSectionComponent {}
