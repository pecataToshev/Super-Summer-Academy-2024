import { Component, Input } from "@angular/core";

import { AssetName } from "../../types/app";

import { AssetComponent } from "../asset/asset.component";

@Component({
   selector: "app-icon-button",
   standalone: true,
   imports: [AssetComponent],
   templateUrl: "./icon-button.component.html",
   styleUrl: "./icon-button.component.scss",
})
export class IconButtonComponent {
   @Input() icon: AssetName = "heartIcon";
}
