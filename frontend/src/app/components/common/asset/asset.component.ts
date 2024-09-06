import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

import { icons } from "../../../constants/app";

import { AssetName } from "../../../types/app";

@Component({
   selector: "app-asset",
   standalone: true,
   imports: [CommonModule],
   templateUrl: "./asset.component.html",
   styleUrl: "./asset.component.scss",
})
export class AssetComponent {
   icons = icons;

   @Input() name: AssetName = "heartIcon";
   @Input() size: number = 16;
   @Input() width?: number | `${number}%`;
   @Input() height?: number | `${number}%`;
   @Input() cover?: boolean;
}
