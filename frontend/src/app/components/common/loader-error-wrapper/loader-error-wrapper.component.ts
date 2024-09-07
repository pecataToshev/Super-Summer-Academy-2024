import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorTextHolderComponent } from "../error-text-holder/error-text-holder.component";

@Component({
   selector: "app-loader-error-wrapper",
   standalone: true,
   imports: [CommonModule, ErrorTextHolderComponent],
   templateUrl: "./loader-error-wrapper.component.html",
   styleUrl: "./loader-error-wrapper.component.scss",
})
export class LoaderErrorWrapperComponent {
   @Input() isLoading: boolean = false;
   @Input() error: any;
}
