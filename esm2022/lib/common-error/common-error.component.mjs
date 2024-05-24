import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from "@angular/platform-browser";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
export class CommonErrorComponent {
    constructor() {
        this.errorMessage = "Server error. Please check the developer console for details.";
        this.buttonName = "Retry";
        this.buttonClickEvent = new EventEmitter();
    }
    onBtnClick() {
        this.buttonClickEvent.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CommonErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0", type: CommonErrorComponent, isStandalone: true, selector: "lib-common-error", inputs: { errorCode: "errorCode", errorMessage: "errorMessage", buttonName: "buttonName" }, outputs: { buttonClickEvent: "buttonClickEvent" }, ngImport: i0, template: "\n<div class=\"box\">\n  @if (errorCode) {\n    <div class=\"error-code\">Error Code: {{ errorCode }}</div>\n  }\n  <div class=\"error-message\">{{ errorMessage }}</div>\n  <div class=\"action-button\">\n    <button mat-raised-button (click)=\"onBtnClick()\">{{ buttonName }}</button>\n  </div>\n</div>\n", styles: [".box{display:flex;align-items:center;justify-content:center;flex-direction:column;height:24vh}.error-code{font-size:xx-large;margin-bottom:32px}.error-message{font-size:large;width:40vh;text-align:center}.action-button{margin-top:24px}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: BrowserModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CommonErrorComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, imports: [
                        MatButtonModule,
                        BrowserModule
                    ], selector: 'lib-common-error', template: "\n<div class=\"box\">\n  @if (errorCode) {\n    <div class=\"error-code\">Error Code: {{ errorCode }}</div>\n  }\n  <div class=\"error-message\">{{ errorMessage }}</div>\n  <div class=\"action-button\">\n    <button mat-raised-button (click)=\"onBtnClick()\">{{ buttonName }}</button>\n  </div>\n</div>\n", styles: [".box{display:flex;align-items:center;justify-content:center;flex-direction:column;height:24vh}.error-code{font-size:xx-large;margin-bottom:32px}.error-message{font-size:large;width:40vh;text-align:center}.action-button{margin-top:24px}\n"] }]
        }], propDecorators: { errorCode: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], buttonName: [{
                type: Input
            }], buttonClickEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWVycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1oaXNiLWNvbW1vbi11aS9zcmMvbGliL2NvbW1vbi1lcnJvci9jb21tb24tZXJyb3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvY29tbW9uLWVycm9yL2NvbW1vbi1lcnJvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7OztBQWN4RCxNQUFNLE9BQU8sb0JBQW9CO0lBWmpDO1FBY1csaUJBQVksR0FBVywrREFBK0QsQ0FBQztRQUN2RixlQUFVLEdBQVMsT0FBTyxDQUFDO1FBQzFCLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7S0FLakQ7SUFIQyxVQUFVO1FBQ1IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7OEdBUlUsb0JBQW9CO2tHQUFwQixvQkFBb0IsMk5DaEJqQyxrVEFVQSxzU0RGSSxlQUFlLDJOQUNmLGFBQWE7OzJGQU9KLG9CQUFvQjtrQkFaaEMsU0FBUztpQ0FFSSxJQUFJLFdBQ1A7d0JBQ1AsZUFBZTt3QkFDZixhQUFhO3FCQUNoQixZQUNXLGtCQUFrQjs4QkFNbkIsU0FBUztzQkFBakIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0ksZ0JBQWdCO3NCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5AQ29tcG9uZW50KHtcblxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGVcbl0sXG4gIHNlbGVjdG9yOiAnbGliLWNvbW1vbi1lcnJvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24tZXJyb3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21tb24tZXJyb3IuY29tcG9uZW50LnNjc3MnXSxcblxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25FcnJvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGVycm9yQ29kZTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiU2VydmVyIGVycm9yLiBQbGVhc2UgY2hlY2sgdGhlIGRldmVsb3BlciBjb25zb2xlIGZvciBkZXRhaWxzLlwiO1xuICBASW5wdXQoKSBidXR0b25OYW1lOiBzdHJpbmc9XCJSZXRyeVwiO1xuICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2tFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBvbkJ0bkNsaWNrKCl7XG4gICAgdGhpcy5idXR0b25DbGlja0V2ZW50LmVtaXQoKTtcbiAgfVxufVxuIiwiXG48ZGl2IGNsYXNzPVwiYm94XCI+XG4gIEBpZiAoZXJyb3JDb2RlKSB7XG4gICAgPGRpdiBjbGFzcz1cImVycm9yLWNvZGVcIj5FcnJvciBDb2RlOiB7eyBlcnJvckNvZGUgfX08L2Rpdj5cbiAgfVxuICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPnt7IGVycm9yTWVzc2FnZSB9fTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIm9uQnRuQ2xpY2soKVwiPnt7IGJ1dHRvbk5hbWUgfX08L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==