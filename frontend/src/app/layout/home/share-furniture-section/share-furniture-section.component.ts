import { Component } from "@angular/core";
import { AssetComponent } from "../../../components/common/asset/asset.component";

@Component({
   selector: "app-share-furniture-section",
   standalone: true,
   imports: [AssetComponent],
   templateUrl: "./share-furniture-section.component.html",
   styleUrl: "./share-furniture-section.component.scss",
})
export class ShareFurnitureSectionComponent {}
