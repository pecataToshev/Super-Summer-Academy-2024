import { Component } from "@angular/core";
import { ButtonComponent } from "../../../components/common/button/button.component";

@Component({
   selector: "app-room-inspiration-section",
   standalone: true,
   imports: [ButtonComponent],
   templateUrl: "./room-inspiration-section.component.html",
   styleUrl: "./room-inspiration-section.component.scss",
})
export class RoomInspirationSectionComponent {}
