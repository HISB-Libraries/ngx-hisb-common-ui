import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
export class CommonErrorComponent {
    constructor() {
        this.errorMessage = "Server error. Please check the developer console for details.";
        this.buttonName = "Retry";
        this.buttonClickEvent = new EventEmitter();
    }
    onBtnClick() {
        this.buttonClickEvent.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: CommonErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.9", type: CommonErrorComponent, selector: "lib-common-error", inputs: { errorCode: "errorCode", errorMessage: "errorMessage", buttonName: "buttonName" }, outputs: { buttonClickEvent: "buttonClickEvent" }, ngImport: i0, template: "\n<div class=\"box\">\n  <div class=\"error-code\" *ngIf=\"errorCode\">Error Code: {{ errorCode }}</div>\n  <div class=\"error-message\">{{ errorMessage }}</div>\n  <div class=\"action-button\">\n    <button mat-raised-button (click)=\"onBtnClick()\">{{ buttonName }}</button>\n  </div>\n</div>\n", styles: [".box{display:flex;align-items:center;justify-content:center;flex-direction:column;height:24vh}.error-code{font-size:xx-large;margin-bottom:32px}.error-message{font-size:large;width:40vh;text-align:center}.action-button{margin-top:24px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: CommonErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-common-error', template: "\n<div class=\"box\">\n  <div class=\"error-code\" *ngIf=\"errorCode\">Error Code: {{ errorCode }}</div>\n  <div class=\"error-message\">{{ errorMessage }}</div>\n  <div class=\"action-button\">\n    <button mat-raised-button (click)=\"onBtnClick()\">{{ buttonName }}</button>\n  </div>\n</div>\n", styles: [".box{display:flex;align-items:center;justify-content:center;flex-direction:column;height:24vh}.error-code{font-size:xx-large;margin-bottom:32px}.error-message{font-size:large;width:40vh;text-align:center}.action-button{margin-top:24px}\n"] }]
        }], propDecorators: { errorCode: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], buttonName: [{
                type: Input
            }], buttonClickEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWVycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1oaXNiLWNvbW1vbi11aS9zcmMvbGliL2NvbW1vbi1lcnJvci9jb21tb24tZXJyb3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvY29tbW9uLWVycm9yL2NvbW1vbi1lcnJvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBT3JFLE1BQU0sT0FBTyxvQkFBb0I7SUFMakM7UUFPVyxpQkFBWSxHQUFXLCtEQUErRCxDQUFDO1FBQ3ZGLGVBQVUsR0FBUyxPQUFPLENBQUM7UUFDMUIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUtqRDtJQUhDLFVBQVU7UUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs4R0FSVSxvQkFBb0I7a0dBQXBCLG9CQUFvQix1TUNQakMsMFNBUUE7OzJGRERhLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRSxrQkFBa0I7OEJBS25CLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNJLGdCQUFnQjtzQkFBekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29tbW9uLWVycm9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbW1vbi1lcnJvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbW1vbi1lcnJvci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZXJyb3JDb2RlOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nID0gXCJTZXJ2ZXIgZXJyb3IuIFBsZWFzZSBjaGVjayB0aGUgZGV2ZWxvcGVyIGNvbnNvbGUgZm9yIGRldGFpbHMuXCI7XG4gIEBJbnB1dCgpIGJ1dHRvbk5hbWU6IHN0cmluZz1cIlJldHJ5XCI7XG4gIEBPdXRwdXQoKSBidXR0b25DbGlja0V2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG9uQnRuQ2xpY2soKXtcbiAgICB0aGlzLmJ1dHRvbkNsaWNrRXZlbnQuZW1pdCgpO1xuICB9XG59XG4iLCJcbjxkaXYgY2xhc3M9XCJib3hcIj5cbiAgPGRpdiBjbGFzcz1cImVycm9yLWNvZGVcIiAqbmdJZj1cImVycm9yQ29kZVwiPkVycm9yIENvZGU6IHt7IGVycm9yQ29kZSB9fTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPnt7IGVycm9yTWVzc2FnZSB9fTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIm9uQnRuQ2xpY2soKVwiPnt7IGJ1dHRvbk5hbWUgfX08L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==