import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/common";
export class CommonErrorComponent {
    constructor() {
        this.errorMessage = "Server error. Please check the developer console for details.";
        this.buttonName = "Retry";
        this.buttonClickEvent = new EventEmitter();
    }
    onBtnClick() {
        this.buttonClickEvent.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CommonErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.9", type: CommonErrorComponent, isStandalone: true, selector: "lib-common-error", inputs: { errorCode: "errorCode", errorMessage: "errorMessage", buttonName: "buttonName" }, outputs: { buttonClickEvent: "buttonClickEvent" }, ngImport: i0, template: "\n<div class=\"box\">\n  <div class=\"error-code\" *ngIf=\"errorCode\">Error Code: {{ errorCode }}</div>\n  <div class=\"error-message\">{{ errorMessage }}</div>\n  <div class=\"action-button\">\n    <button mat-raised-button (click)=\"onBtnClick()\">{{ buttonName }}</button>\n  </div>\n</div>\n", styles: [".box{display:flex;align-items:center;justify-content:center;flex-direction:column;height:24vh}.error-code{font-size:xx-large;margin-bottom:32px}.error-message{font-size:large;width:40vh;text-align:center}.action-button{margin-top:24px}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: BrowserModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CommonErrorComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, imports: [
                        MatButtonModule,
                        CommonModule,
                        BrowserModule
                    ], selector: 'lib-common-error', template: "\n<div class=\"box\">\n  <div class=\"error-code\" *ngIf=\"errorCode\">Error Code: {{ errorCode }}</div>\n  <div class=\"error-message\">{{ errorMessage }}</div>\n  <div class=\"action-button\">\n    <button mat-raised-button (click)=\"onBtnClick()\">{{ buttonName }}</button>\n  </div>\n</div>\n", styles: [".box{display:flex;align-items:center;justify-content:center;flex-direction:column;height:24vh}.error-code{font-size:xx-large;margin-bottom:32px}.error-message{font-size:large;width:40vh;text-align:center}.action-button{margin-top:24px}\n"] }]
        }], propDecorators: { errorCode: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], buttonName: [{
                type: Input
            }], buttonClickEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWVycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1oaXNiLWNvbW1vbi11aS9zcmMvbGliL2NvbW1vbi1lcnJvci9jb21tb24tZXJyb3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvY29tbW9uLWVycm9yL2NvbW1vbi1lcnJvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7O0FBZXhELE1BQU0sT0FBTyxvQkFBb0I7SUFiakM7UUFlVyxpQkFBWSxHQUFXLCtEQUErRCxDQUFDO1FBQ3ZGLGVBQVUsR0FBUyxPQUFPLENBQUM7UUFDMUIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUtqRDtJQUhDLFVBQVU7UUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs4R0FSVSxvQkFBb0I7a0dBQXBCLG9CQUFvQiwyTkNsQmpDLDBTQVFBLHNTRENJLGVBQWUsMk5BQ2YsWUFBWSxrSUFDWixhQUFhOzsyRkFPSixvQkFBb0I7a0JBYmhDLFNBQVM7aUNBRUksSUFBSSxXQUNQO3dCQUNQLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixhQUFhO3FCQUNkLFlBQ1Msa0JBQWtCOzhCQU1uQixTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDSSxnQkFBZ0I7c0JBQXpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uXCI7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5AQ29tcG9uZW50KHtcblxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlXG4gIF0sXG4gIHNlbGVjdG9yOiAnbGliLWNvbW1vbi1lcnJvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24tZXJyb3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21tb24tZXJyb3IuY29tcG9uZW50LnNjc3MnXSxcblxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25FcnJvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGVycm9yQ29kZTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiU2VydmVyIGVycm9yLiBQbGVhc2UgY2hlY2sgdGhlIGRldmVsb3BlciBjb25zb2xlIGZvciBkZXRhaWxzLlwiO1xuICBASW5wdXQoKSBidXR0b25OYW1lOiBzdHJpbmc9XCJSZXRyeVwiO1xuICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2tFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBvbkJ0bkNsaWNrKCl7XG4gICAgdGhpcy5idXR0b25DbGlja0V2ZW50LmVtaXQoKTtcbiAgfVxufVxuIiwiXG48ZGl2IGNsYXNzPVwiYm94XCI+XG4gIDxkaXYgY2xhc3M9XCJlcnJvci1jb2RlXCIgKm5nSWY9XCJlcnJvckNvZGVcIj5FcnJvciBDb2RlOiB7eyBlcnJvckNvZGUgfX08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj57eyBlcnJvck1lc3NhZ2UgfX08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImFjdGlvbi1idXR0b25cIj5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJvbkJ0bkNsaWNrKClcIj57eyBidXR0b25OYW1lIH19PC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=