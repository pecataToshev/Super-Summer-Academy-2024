import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
   selector: "app-section",
   standalone: true,
   imports: [CommonModule],
   templateUrl: "./section.component.html",
   styleUrl: "./section.component.scss",
})
export class SectionComponent {
   @Input() preText: string = "";
   @Input() title: string = "";
   @Input() description: string = "";
   @Input() ignoreLimitContentWidth: boolean = false;
   @Input() darkerBackgroundColor: boolean = false;
}
