import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IconButtonComponent } from "../../components/common/icon-button/icon-button.component";
import { AssetName } from "../../types/app";

@Component({
   selector: "app-header",
   standalone: true,
   imports: [CommonModule, IconButtonComponent],
   templateUrl: "./header.component.html",
   styleUrl: "./header.component.scss",
})
export class HeaderComponent {
   links = [
      {
         label: "Home",
         href: "/",
      },
      {
         label: "Shop",
         href: "/shop",
      },
      {
         label: "About",
         href: "/about",
      },
      {
         label: "Contact",
         href: "/contact",
      },
   ];

   iconButtons: AssetName[] = ["userExclamationIcon", "magnifyingGlassIcon", "heartIcon", "shoppingCartIcon"];
}
