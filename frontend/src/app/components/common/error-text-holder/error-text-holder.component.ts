import { Component, Input } from "@angular/core";
import { AssetComponent } from "../asset/asset.component";

@Component({
   selector: "app-error-text-holder",
   standalone: true,
   imports: [AssetComponent],
   templateUrl: "./error-text-holder.component.html",
   styleUrl: "./error-text-holder.component.scss",
})
export class ErrorTextHolderComponent {
   @Input() errorMessage: string = "";
}
