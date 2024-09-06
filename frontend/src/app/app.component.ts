import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "./layout/header/header.component";
import { HeroSectionComponent } from "./layout/home/hero-section/hero-section.component";

@Component({
   selector: "app-root",
   standalone: true,
   imports: [RouterOutlet, HeaderComponent, HeroSectionComponent],
   templateUrl: "./app.component.html",
   styleUrl: "./app.component.scss",
})
export class AppComponent {
   title = "first-angular-project";
}
