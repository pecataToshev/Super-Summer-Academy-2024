import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "./layout/header/header.component";
import { HomeIndexComponent } from "./layout/home/home-index/home-index.component";

@Component({
   selector: "app-root",
   standalone: true,
   imports: [RouterOutlet, HeaderComponent, HomeIndexComponent],
   templateUrl: "./app.component.html",
   styleUrl: "./app.component.scss",
})
export class AppComponent {
   title = "Furniro";
}
