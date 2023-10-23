import { Component, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogConfig } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
export class TextInputDialogComponent {
    ngAfterViewInit() {
        if (this.textareaElement) {
            this.autoResizeTextarea(this.textareaElement.nativeElement);
        }
    }
    constructor(dialogRef, dialogData) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.minNumberOfRows = 20;
        this.data = {};
        this.dialogForm = new UntypedFormGroup({
            content: new UntypedFormControl(null)
        });
        this.numRows = 10;
    }
    onCancel() {
        this.dialogRef.close();
        this.dialogForm.reset();
    }
    onSave() {
        this.dialogRef.close(this.dialogForm.controls['content'].value);
        this.dialogForm.reset();
    }
    ngOnInit() {
        this.data.title = this.dialogData.title ?? "";
        this.data.content = this.dialogData.content ?? "Do you want to continue?";
        this.data.primaryActionBtnTitle = this.dialogData.primaryActionBtnTitle ?? "Yes";
        this.data.secondaryActionBtnTitle = this.dialogData.secondaryActionBtnTitle ?? "No";
        this.data.width = this.dialogData.width ?? '4em';
        this.data.height = this.dialogData.width ?? '4em';
        this.data.isPrimaryButtonLeft = this.dialogData.isPrimaryButtonLeft ?? false;
        this.data.inputLabelText = this.dialogData.inputLabelText ?? 'Paste or enter content here';
        if (this.dialogData.content) {
            this.dialogForm.controls['content'].patchValue(this.dialogData.content);
        }
        if (this.dialogData.formValidators) {
            // Inject the validators
            this.dialogForm.controls['content'].setValidators(this.dialogData.formValidators);
            this.dialogForm.controls['content'].updateValueAndValidity();
            this.data.formValidationTypes = this.dialogData.formValidationTypes;
        }
    }
    onSubmit() {
        if (this.dialogForm.valid) {
            this.onSave();
            this.data.validatorErrors = '';
        }
        else {
            this.data.validatorErrors = this.getValidationErrors(this.dialogForm.controls['content'].errors, this.data.formValidationTypes);
        }
    }
    getValidationErrors(errors, errorTypes) {
        if (!errors || !errorTypes) {
            console.error("No errors or error type parameters present.");
            return '';
        }
        const errorName = Object.keys(errors)[0];
        const result = errorTypes.find(element => element.name === errorName)?.display;
        if (result) {
            return result;
        }
        else if (errorName) {
            console.error("Unable to find error with name " + errorName);
            return "Validation Error Produced";
        }
        else {
            console.log("The validation did not produce any errors");
            return '';
        }
    }
    autoResizeTextarea(textarea) {
        textarea.style.height = 'auto';
        let lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
        let rows = Math.ceil(textarea.scrollHeight / lineHeight);
        if (rows < this.minNumberOfRows) {
            textarea.rows = this.minNumberOfRows;
        }
        else {
            textarea.rows = rows;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: TextInputDialogComponent, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.9", type: TextInputDialogComponent, isStandalone: true, selector: "lib-text-input-dialog", viewQueries: [{ propertyName: "textareaElement", first: true, predicate: ["textareaElement"], descendants: true }], ngImport: i0, template: "\n<h1 mat-dialog-title>{{data.title}}</h1>\n<form [formGroup]=\"dialogForm\" (ngSubmit)=\"onSubmit()\">\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" style=\"width: 100%\">\n      <mat-label>{{data.inputLabelText}}</mat-label>\n      <textarea type=\"text\" matInput formControlName=\"content\"\n                #textareaElement\n                (input)=\"autoResizeTextarea(textareaElement)\"></textarea>\n      <mat-error>\n        {{ data.validatorErrors }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions align=\"end\">\n    <button type=\"button\" mat-stroked-button (click)=\"onCancel()\" cdkFocusInitial>{{data.secondaryActionBtnTitle}}</button>\n    <button mat-stroked-button type=\"submit\" color=\"primary\" >{{data.primaryActionBtnTitle}}</button>\n  </div>\n</form>\n\n", styles: ["textarea{font-size:13px;font-family:monospace!important}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i4.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: TextInputDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-text-input-dialog', standalone: true, imports: [
                        CommonModule,
                        MatButtonModule,
                        CommonModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatDialogModule,
                        MatInputModule
                    ], template: "\n<h1 mat-dialog-title>{{data.title}}</h1>\n<form [formGroup]=\"dialogForm\" (ngSubmit)=\"onSubmit()\">\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" style=\"width: 100%\">\n      <mat-label>{{data.inputLabelText}}</mat-label>\n      <textarea type=\"text\" matInput formControlName=\"content\"\n                #textareaElement\n                (input)=\"autoResizeTextarea(textareaElement)\"></textarea>\n      <mat-error>\n        {{ data.validatorErrors }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions align=\"end\">\n    <button type=\"button\" mat-stroked-button (click)=\"onCancel()\" cdkFocusInitial>{{data.secondaryActionBtnTitle}}</button>\n    <button mat-stroked-button type=\"submit\" color=\"primary\" >{{data.primaryActionBtnTitle}}</button>\n  </div>\n</form>\n\n", styles: ["textarea{font-size:13px;font-family:monospace!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; }, propDecorators: { textareaElement: [{
                type: ViewChild,
                args: ['textareaElement']
            }] } });
export function openTextInputDialog(dialog, dialogData) {
    const config = new MatDialogConfig();
    config.autoFocus = true;
    config.width = dialogData?.width ?? "80%";
    config.data = {
        ...dialogData
    };
    const dialogRef = dialog.open(TextInputDialogComponent, config);
    return dialogRef.afterClosed();
}
export function JsonValidator(control) {
    if (control.value == null) {
        return null;
    }
    let hasErrors = false;
    try {
        JSON.parse(control.value.trim());
    }
    catch (e) {
        hasErrors = true;
    }
    if (hasErrors) {
        return { jsonValidator: true };
    }
    return null;
}
export function ResourceTypeValidator(control) {
    if (control.value == null) {
        return null;
    }
    let hasErrors = false;
    let json = null;
    try {
        json = JSON.parse(control.value.trim());
    }
    catch (e) {
        hasErrors = true;
    }
    if (!json?.resourceType) {
        hasErrors = true;
    }
    if (hasErrors) {
        return { resourceTypeValidator: true };
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvZGlhbG9nL3RleHQtaW5wdXQtZGlhbG9nL3RleHQtaW5wdXQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1oaXNiLWNvbW1vbi11aS9zcmMvbGliL2RpYWxvZy90ZXh0LWlucHV0LWRpYWxvZy90ZXh0LWlucHV0LWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBYyxNQUFNLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsbUJBQW1CLEVBQ25CLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFFakIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUMsZUFBZSxFQUFnQixlQUFlLEVBQUUsZUFBZSxFQUFZLE1BQU0sMEJBQTBCLENBQUM7QUFDcEgsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztBQW1CdkQsTUFBTSxPQUFPLHdCQUF3QjtJQUluQyxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztJQVFELFlBQ1UsU0FBNEIsRUFDSCxVQUFlO1FBRHhDLGNBQVMsR0FBVCxTQUFTLENB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QUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7S0FDbEM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FDbEI7SUFDRCxJQUFJLFNBQVMsRUFBRTtRQUNiLE9BQU8sRUFBQyxhQUFhLEVBQUUsSUFBSSxFQUFDLENBQUM7S0FDOUI7SUFDRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUM7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsT0FBd0I7SUFDNUQsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtRQUN6QixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztJQUNoQixJQUFJO1FBQ0YsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ3pDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixTQUFTLEdBQUcsSUFBSSxDQUFDO0tBQ2xCO0lBRUQsSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7UUFDdkIsU0FBUyxHQUFHLElBQUksQ0FBQztLQUNsQjtJQUVELElBQUksU0FBUyxFQUFFO1FBQ2IsT0FBTyxFQUFDLHFCQUFxQixFQUFFLElBQUksRUFBQyxDQUFDO0tBQ3RDO0lBQ0QsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgVW50eXBlZEZvcm1Db250cm9sLFxuICBVbnR5cGVkRm9ybUdyb3VwLFxuICBWYWxpZGF0aW9uRXJyb3JzXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtNYXREaWFsb2dNb2R1bGUsIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dDb25maWcsIE1hdERpYWxvZ30gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9idXR0b25cIjtcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2lucHV0XCI7XG5pbXBvcnQge1RleHRJbnB1dERpYWxvZ0RhdGF9IGZyb20gXCIuLi9kb21haW4vdGV4dC1pbnB1dC1kaWFsb2ctZGF0YVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdGV4dC1pbnB1dC1kaWFsb2cnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWlucHV0LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtaW5wdXQtZGlhbG9nLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RleHRhcmVhRWxlbWVudCcpIHRleHRhcmVhRWxlbWVudDogRWxlbWVudFJlZiB8IHVuZGVmaW5lZDtcbiAgbWluTnVtYmVyT2ZSb3dzID0gMjA7XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLnRleHRhcmVhRWxlbWVudCkge1xuICAgICAgdGhpcy5hdXRvUmVzaXplVGV4dGFyZWEodGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZGF0YTogIFRleHRJbnB1dERpYWxvZ0RhdGE9IHt9O1xuICBkaWFsb2dGb3JtID0gbmV3IFVudHlwZWRGb3JtR3JvdXAoe1xuICAgIGNvbnRlbnQ6IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2wobnVsbClcbiAgfSk7XG4gIG51bVJvd3M6IG51bWJlcj0xMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGFueT4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGlhbG9nRGF0YTogYW55XG4gICkgeyB9XG5cbiAgb25DYW5jZWwoKSB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB0aGlzLmRpYWxvZ0Zvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIG9uU2F2ZSgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLmRpYWxvZ0Zvcm0uY29udHJvbHNbJ2NvbnRlbnQnXS52YWx1ZSk7XG4gICAgdGhpcy5kaWFsb2dGb3JtLnJlc2V0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuZGF0YS50aXRsZSA9IHRoaXMuZGlhbG9nRGF0YS50aXRsZSA/PyBcIlwiO1xuICAgIHRoaXMuZGF0YS5jb250ZW50ID0gdGhpcy5kaWFsb2dEYXRhLmNvbnRlbnQgPz8gXCJEbyB5b3Ugd2FudCB0byBjb250aW51ZT9cIjtcbiAgICB0aGlzLmRhdGEucHJpbWFyeUFjdGlvbkJ0blRpdGxlID0gdGhpcy5kaWFsb2dEYXRhLnByaW1hcnlBY3Rpb25CdG5UaXRsZSA/PyBcIlllc1wiO1xuICAgIHRoaXMuZGF0YS5zZWNvbmRhcnlBY3Rpb25CdG5UaXRsZSA9IHRoaXMuZGlhbG9nRGF0YS5zZWNvbmRhcnlBY3Rpb25CdG5UaXRsZSA/PyBcIk5vXCI7XG4gICAgdGhpcy5kYXRhLndpZHRoID0gdGhpcy5kaWFsb2dEYXRhLndpZHRoID8/ICc0ZW0nO1xuICAgIHRoaXMuZGF0YS5oZWlnaHQgPSB0aGlzLmRpYWxvZ0RhdGEud2lkdGggPz8gJzRlbSc7XG4gICAgdGhpcy5kYXRhLmlzUHJpbWFyeUJ1dHRvbkxlZnQgPSB0aGlzLmRpYWxvZ0RhdGEuaXNQcmltYXJ5QnV0dG9uTGVmdCA/PyBmYWxzZTtcbiAgICB0aGlzLmRhdGEuaW5wdXRMYWJlbFRleHQgPSB0aGlzLmRpYWxvZ0RhdGEuaW5wdXRMYWJlbFRleHQgPz8gJ1Bhc3RlIG9yIGVudGVyIGNvbnRlbnQgaGVyZSc7XG5cbiAgICBpZih0aGlzLmRpYWxvZ0RhdGEuY29udGVudCl7XG4gICAgICB0aGlzLmRpYWxvZ0Zvcm0uY29udHJvbHNbJ2NvbnRlbnQnXS5wYXRjaFZhbHVlKHRoaXMuZGlhbG9nRGF0YS5jb250ZW50KTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmRpYWxvZ0RhdGEuZm9ybVZhbGlkYXRvcnMpe1xuICAgICAgLy8gSW5qZWN0IHRoZSB2YWxpZGF0b3JzXG4gICAgICB0aGlzLmRpYWxvZ0Zvcm0uY29udHJvbHNbJ2NvbnRlbnQnXS5zZXRWYWxpZGF0b3JzKHRoaXMuZGlhbG9nRGF0YS5mb3JtVmFsaWRhdG9ycyk7XG4gICAgICB0aGlzLmRpYWxvZ0Zvcm0uY29udHJvbHNbJ2NvbnRlbnQnXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB0aGlzLmRhdGEuZm9ybVZhbGlkYXRpb25UeXBlcyA9IHRoaXMuZGlhbG9nRGF0YS5mb3JtVmFsaWRhdGlvblR5cGVzXG4gICAgfVxuXG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBpZih0aGlzLmRpYWxvZ0Zvcm0udmFsaWQpe1xuICAgICAgdGhpcy5vblNhdmUoKTtcbiAgICAgIHRoaXMuZGF0YS52YWxpZGF0b3JFcnJvcnMgPSAnJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmRhdGEudmFsaWRhdG9yRXJyb3JzID0gdGhpcy5nZXRWYWxpZGF0aW9uRXJyb3JzKHRoaXMuZGlhbG9nRm9ybS5jb250cm9sc1snY29udGVudCddLmVycm9ycywgdGhpcy5kYXRhLmZvcm1WYWxpZGF0aW9uVHlwZXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbGlkYXRpb25FcnJvcnMoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCwgZXJyb3JUeXBlczogYW55W10gfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuICAgIGlmKCFlcnJvcnMgfHwgIWVycm9yVHlwZXMpe1xuICAgICAgY29uc29sZS5lcnJvcihcIk5vIGVycm9ycyBvciBlcnJvciB0eXBlIHBhcmFtZXRlcnMgcHJlc2VudC5cIik7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IGVycm9yTmFtZSA9IE9iamVjdC5rZXlzKGVycm9ycylbMF07XG4gICAgY29uc3QgcmVzdWx0ID0gZXJyb3JUeXBlcy5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBlcnJvck5hbWUpPy5kaXNwbGF5O1xuICAgIGlmKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZWxzZSBpZihlcnJvck5hbWUpe1xuICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmaW5kIGVycm9yIHdpdGggbmFtZSBcIiArIGVycm9yTmFtZSk7XG4gICAgICByZXR1cm4gXCJWYWxpZGF0aW9uIEVycm9yIFByb2R1Y2VkXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJUaGUgdmFsaWRhdGlvbiBkaWQgbm90IHByb2R1Y2UgYW55IGVycm9yc1wiKVxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIGF1dG9SZXNpemVUZXh0YXJlYSh0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCk6IHZvaWQge1xuICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICBsZXQgbGluZUhlaWdodCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGV4dGFyZWEpLmxpbmVIZWlnaHQpO1xuICAgIGxldCByb3dzID0gTWF0aC5jZWlsKHRleHRhcmVhLnNjcm9sbEhlaWdodCAvIGxpbmVIZWlnaHQpO1xuICAgIGlmKHJvd3MgPCB0aGlzLm1pbk51bWJlck9mUm93cyl7XG4gICAgICB0ZXh0YXJlYS5yb3dzID0gdGhpcy5taW5OdW1iZXJPZlJvd3M7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB0ZXh0YXJlYS5yb3dzID0gcm93cztcbiAgICB9XG5cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlblRleHRJbnB1dERpYWxvZyhkaWFsb2c6IE1hdERpYWxvZywgZGlhbG9nRGF0YT86IFRleHRJbnB1dERpYWxvZ0RhdGEpIHtcblxuICBjb25zdCBjb25maWcgPSBuZXcgTWF0RGlhbG9nQ29uZmlnKCk7XG5cbiAgY29uZmlnLmF1dG9Gb2N1cyA9IHRydWU7XG4gIGNvbmZpZy53aWR0aCA9IGRpYWxvZ0RhdGE/LndpZHRoID8/IFwiODAlXCI7XG5cbiAgY29uZmlnLmRhdGEgPSB7XG4gICAgLi4uZGlhbG9nRGF0YVxuICB9XG5cbiAgY29uc3QgZGlhbG9nUmVmID0gZGlhbG9nLm9wZW4oVGV4dElucHV0RGlhbG9nQ29tcG9uZW50LCBjb25maWcpO1xuXG4gIHJldHVybiBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEpzb25WYWxpZGF0b3IoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gIGlmIChjb250cm9sLnZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBsZXQgaGFzRXJyb3JzID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgSlNPTi5wYXJzZShjb250cm9sLnZhbHVlLnRyaW0oKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYXNFcnJvcnMgPSB0cnVlO1xuICB9XG4gIGlmIChoYXNFcnJvcnMpIHtcbiAgICByZXR1cm4ge2pzb25WYWxpZGF0b3I6IHRydWV9O1xuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZXNvdXJjZVR5cGVWYWxpZGF0b3IoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gIGlmIChjb250cm9sLnZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCBoYXNFcnJvcnMgPSBmYWxzZTtcbiAgbGV0IGpzb24gPSBudWxsO1xuICB0cnkge1xuICAgIGpzb24gPSBKU09OLnBhcnNlKGNvbnRyb2wudmFsdWUudHJpbSgpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhc0Vycm9ycyA9IHRydWU7XG4gIH1cblxuICBpZiAoIWpzb24/LnJlc291cmNlVHlwZSkge1xuICAgIGhhc0Vycm9ycyA9IHRydWU7XG4gIH1cblxuICBpZiAoaGFzRXJyb3JzKSB7XG4gICAgcmV0dXJuIHtyZXNvdXJjZVR5cGVWYWxpZGF0b3I6IHRydWV9O1xuICB9XG4gIHJldHVybiBudWxsXG59XG4iLCJcbjxoMSBtYXQtZGlhbG9nLXRpdGxlPnt7ZGF0YS50aXRsZX19PC9oMT5cbjxmb3JtIFtmb3JtR3JvdXBdPVwiZGlhbG9nRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gIDxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIHN0eWxlPVwid2lkdGg6IDEwMCVcIj5cbiAgICAgIDxtYXQtbGFiZWw+e3tkYXRhLmlucHV0TGFiZWxUZXh0fX08L21hdC1sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICN0ZXh0YXJlYUVsZW1lbnRcbiAgICAgICAgICAgICAgICAoaW5wdXQpPVwiYXV0b1Jlc2l6ZVRleHRhcmVhKHRleHRhcmVhRWxlbWVudClcIj48L3RleHRhcmVhPlxuICAgICAgPG1hdC1lcnJvcj5cbiAgICAgICAge3sgZGF0YS52YWxpZGF0b3JFcnJvcnMgfX1cbiAgICAgIDwvbWF0LWVycm9yPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuICA8ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG1hdC1zdHJva2VkLWJ1dHRvbiAoY2xpY2spPVwib25DYW5jZWwoKVwiIGNka0ZvY3VzSW5pdGlhbD57e2RhdGEuc2Vjb25kYXJ5QWN0aW9uQnRuVGl0bGV9fTwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cInByaW1hcnlcIiA+e3tkYXRhLnByaW1hcnlBY3Rpb25CdG5UaXRsZX19PC9idXR0b24+XG4gIDwvZGl2PlxuPC9mb3JtPlxuXG4iXX0=