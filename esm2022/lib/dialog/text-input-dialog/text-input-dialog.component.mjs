import { Component, Inject, ViewChild } from '@angular/core';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: TextInputDialogComponent, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0", type: TextInputDialogComponent, isStandalone: true, selector: "lib-text-input-dialog", viewQueries: [{ propertyName: "textareaElement", first: true, predicate: ["textareaElement"], descendants: true }], ngImport: i0, template: "\n<h1 mat-dialog-title>{{data.title}}</h1>\n<form [formGroup]=\"dialogForm\" (ngSubmit)=\"onSubmit()\">\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" style=\"width: 100%\">\n      <mat-label>{{data.inputLabelText}}</mat-label>\n      <textarea type=\"text\" matInput formControlName=\"content\"\n                #textareaElement\n                (input)=\"autoResizeTextarea(textareaElement)\"></textarea>\n      <mat-error>\n        {{ data.validatorErrors }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions align=\"end\">\n    <button type=\"button\" mat-stroked-button (click)=\"onCancel()\" cdkFocusInitial>{{data.secondaryActionBtnTitle}}</button>\n    <button mat-stroked-button type=\"submit\" color=\"primary\" >{{data.primaryActionBtnTitle}}</button>\n  </div>\n</form>\n\n", styles: ["textarea{font-size:13px;font-family:monospace!important}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i4.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: TextInputDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-text-input-dialog', standalone: true, imports: [
                        MatButtonModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatDialogModule,
                        MatInputModule
                    ], template: "\n<h1 mat-dialog-title>{{data.title}}</h1>\n<form [formGroup]=\"dialogForm\" (ngSubmit)=\"onSubmit()\">\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" style=\"width: 100%\">\n      <mat-label>{{data.inputLabelText}}</mat-label>\n      <textarea type=\"text\" matInput formControlName=\"content\"\n                #textareaElement\n                (input)=\"autoResizeTextarea(textareaElement)\"></textarea>\n      <mat-error>\n        {{ data.validatorErrors }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions align=\"end\">\n    <button type=\"button\" mat-stroked-button (click)=\"onCancel()\" cdkFocusInitial>{{data.secondaryActionBtnTitle}}</button>\n    <button mat-stroked-button type=\"submit\" color=\"primary\" >{{data.primaryActionBtnTitle}}</button>\n  </div>\n</form>\n\n", styles: ["textarea{font-size:13px;font-family:monospace!important}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }], propDecorators: { textareaElement: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvZGlhbG9nL3RleHQtaW5wdXQtZGlhbG9nL3RleHQtaW5wdXQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1oaXNiLWNvbW1vbi11aS9zcmMvbGliL2RpYWxvZy90ZXh0LWlucHV0LWRpYWxvZy90ZXh0LWlucHV0LWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBYyxNQUFNLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTlGLE9BQU8sRUFFTCxtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUVqQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBQyxlQUFlLEVBQWdCLGVBQWUsRUFBRSxlQUFlLEVBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUNwSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7O0FBaUJ2RCxNQUFNLE9BQU8sd0JBQXdCO0lBSW5DLGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5RCxDQUFDO0lBQ0gsQ0FBQztJQVFELFlBQ1UsU0FBNEIsRUFDSCxVQUFlO1FBRHhDLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQ0gsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQWhC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QUksU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN0QixJQUFJLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNYLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksU0FBUyxFQUFFLENBQUM7UUFDZCxPQUFPLEVBQUMsYUFBYSxFQUFFLElBQUksRUFBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUM7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsT0FBd0I7SUFDNUQsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7SUFDaEIsSUFBSSxDQUFDO1FBQ0gsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQztRQUN4QixTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ2QsT0FBTyxFQUFDLHFCQUFxQixFQUFFLElBQUksRUFBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgVW50eXBlZEZvcm1Db250cm9sLFxuICBVbnR5cGVkRm9ybUdyb3VwLFxuICBWYWxpZGF0aW9uRXJyb3JzXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtNYXREaWFsb2dNb2R1bGUsIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dDb25maWcsIE1hdERpYWxvZ30gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9idXR0b25cIjtcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2lucHV0XCI7XG5pbXBvcnQge1RleHRJbnB1dERpYWxvZ0RhdGF9IGZyb20gXCIuLi9kb21haW4vdGV4dC1pbnB1dC1kaWFsb2ctZGF0YVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdGV4dC1pbnB1dC1kaWFsb2cnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZVxuXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtaW5wdXQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1pbnB1dC1kaWFsb2cuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgVGV4dElucHV0RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgndGV4dGFyZWFFbGVtZW50JykgdGV4dGFyZWFFbGVtZW50OiBFbGVtZW50UmVmIHwgdW5kZWZpbmVkO1xuICBtaW5OdW1iZXJPZlJvd3MgPSAyMDtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMudGV4dGFyZWFFbGVtZW50KSB7XG4gICAgICB0aGlzLmF1dG9SZXNpemVUZXh0YXJlYSh0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBkYXRhOiAgVGV4dElucHV0RGlhbG9nRGF0YT0ge307XG4gIGRpYWxvZ0Zvcm0gPSBuZXcgVW50eXBlZEZvcm1Hcm91cCh7XG4gICAgY29udGVudDogbmV3IFVudHlwZWRGb3JtQ29udHJvbChudWxsKVxuICB9KTtcbiAgbnVtUm93czogbnVtYmVyPTEwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8YW55PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkaWFsb2dEYXRhOiBhbnlcbiAgKSB7IH1cblxuICBvbkNhbmNlbCgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgIHRoaXMuZGlhbG9nRm9ybS5yZXNldCgpO1xuICB9XG5cbiAgb25TYXZlKCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMuZGlhbG9nRm9ybS5jb250cm9sc1snY29udGVudCddLnZhbHVlKTtcbiAgICB0aGlzLmRpYWxvZ0Zvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5kYXRhLnRpdGxlID0gdGhpcy5kaWFsb2dEYXRhLnRpdGxlID8/IFwiXCI7XG4gICAgdGhpcy5kYXRhLmNvbnRlbnQgPSB0aGlzLmRpYWxvZ0RhdGEuY29udGVudCA/PyBcIkRvIHlvdSB3YW50IHRvIGNvbnRpbnVlP1wiO1xuICAgIHRoaXMuZGF0YS5wcmltYXJ5QWN0aW9uQnRuVGl0bGUgPSB0aGlzLmRpYWxvZ0RhdGEucHJpbWFyeUFjdGlvbkJ0blRpdGxlID8/IFwiWWVzXCI7XG4gICAgdGhpcy5kYXRhLnNlY29uZGFyeUFjdGlvbkJ0blRpdGxlID0gdGhpcy5kaWFsb2dEYXRhLnNlY29uZGFyeUFjdGlvbkJ0blRpdGxlID8/IFwiTm9cIjtcbiAgICB0aGlzLmRhdGEud2lkdGggPSB0aGlzLmRpYWxvZ0RhdGEud2lkdGggPz8gJzRlbSc7XG4gICAgdGhpcy5kYXRhLmhlaWdodCA9IHRoaXMuZGlhbG9nRGF0YS53aWR0aCA/PyAnNGVtJztcbiAgICB0aGlzLmRhdGEuaXNQcmltYXJ5QnV0dG9uTGVmdCA9IHRoaXMuZGlhbG9nRGF0YS5pc1ByaW1hcnlCdXR0b25MZWZ0ID8/IGZhbHNlO1xuICAgIHRoaXMuZGF0YS5pbnB1dExhYmVsVGV4dCA9IHRoaXMuZGlhbG9nRGF0YS5pbnB1dExhYmVsVGV4dCA/PyAnUGFzdGUgb3IgZW50ZXIgY29udGVudCBoZXJlJztcblxuICAgIGlmKHRoaXMuZGlhbG9nRGF0YS5jb250ZW50KXtcbiAgICAgIHRoaXMuZGlhbG9nRm9ybS5jb250cm9sc1snY29udGVudCddLnBhdGNoVmFsdWUodGhpcy5kaWFsb2dEYXRhLmNvbnRlbnQpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuZGlhbG9nRGF0YS5mb3JtVmFsaWRhdG9ycyl7XG4gICAgICAvLyBJbmplY3QgdGhlIHZhbGlkYXRvcnNcbiAgICAgIHRoaXMuZGlhbG9nRm9ybS5jb250cm9sc1snY29udGVudCddLnNldFZhbGlkYXRvcnModGhpcy5kaWFsb2dEYXRhLmZvcm1WYWxpZGF0b3JzKTtcbiAgICAgIHRoaXMuZGlhbG9nRm9ybS5jb250cm9sc1snY29udGVudCddLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgIHRoaXMuZGF0YS5mb3JtVmFsaWRhdGlvblR5cGVzID0gdGhpcy5kaWFsb2dEYXRhLmZvcm1WYWxpZGF0aW9uVHlwZXNcbiAgICB9XG5cbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGlmKHRoaXMuZGlhbG9nRm9ybS52YWxpZCl7XG4gICAgICB0aGlzLm9uU2F2ZSgpO1xuICAgICAgdGhpcy5kYXRhLnZhbGlkYXRvckVycm9ycyA9ICcnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YS52YWxpZGF0b3JFcnJvcnMgPSB0aGlzLmdldFZhbGlkYXRpb25FcnJvcnModGhpcy5kaWFsb2dGb3JtLmNvbnRyb2xzWydjb250ZW50J10uZXJyb3JzLCB0aGlzLmRhdGEuZm9ybVZhbGlkYXRpb25UeXBlcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsaWRhdGlvbkVycm9ycyhlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsLCBlcnJvclR5cGVzOiBhbnlbXSB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gICAgaWYoIWVycm9ycyB8fCAhZXJyb3JUeXBlcyl7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTm8gZXJyb3JzIG9yIGVycm9yIHR5cGUgcGFyYW1ldGVycyBwcmVzZW50LlwiKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgZXJyb3JOYW1lID0gT2JqZWN0LmtleXMoZXJyb3JzKVswXTtcbiAgICBjb25zdCByZXN1bHQgPSBlcnJvclR5cGVzLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IGVycm9yTmFtZSk/LmRpc3BsYXk7XG4gICAgaWYocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBlbHNlIGlmKGVycm9yTmFtZSl7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGZpbmQgZXJyb3Igd2l0aCBuYW1lIFwiICsgZXJyb3JOYW1lKTtcbiAgICAgIHJldHVybiBcIlZhbGlkYXRpb24gRXJyb3IgUHJvZHVjZWRcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlRoZSB2YWxpZGF0aW9uIGRpZCBub3QgcHJvZHVjZSBhbnkgZXJyb3JzXCIpXG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgYXV0b1Jlc2l6ZVRleHRhcmVhKHRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50KTogdm9pZCB7XG4gICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgIGxldCBsaW5lSGVpZ2h0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0YXJlYSkubGluZUhlaWdodCk7XG4gICAgbGV0IHJvd3MgPSBNYXRoLmNlaWwodGV4dGFyZWEuc2Nyb2xsSGVpZ2h0IC8gbGluZUhlaWdodCk7XG4gICAgaWYocm93cyA8IHRoaXMubWluTnVtYmVyT2ZSb3dzKXtcbiAgICAgIHRleHRhcmVhLnJvd3MgPSB0aGlzLm1pbk51bWJlck9mUm93cztcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRleHRhcmVhLnJvd3MgPSByb3dzO1xuICAgIH1cblxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuVGV4dElucHV0RGlhbG9nKGRpYWxvZzogTWF0RGlhbG9nLCBkaWFsb2dEYXRhPzogVGV4dElucHV0RGlhbG9nRGF0YSkge1xuXG4gIGNvbnN0IGNvbmZpZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcblxuICBjb25maWcuYXV0b0ZvY3VzID0gdHJ1ZTtcbiAgY29uZmlnLndpZHRoID0gZGlhbG9nRGF0YT8ud2lkdGggPz8gXCI4MCVcIjtcblxuICBjb25maWcuZGF0YSA9IHtcbiAgICAuLi5kaWFsb2dEYXRhXG4gIH1cblxuICBjb25zdCBkaWFsb2dSZWYgPSBkaWFsb2cub3BlbihUZXh0SW5wdXREaWFsb2dDb21wb25lbnQsIGNvbmZpZyk7XG5cbiAgcmV0dXJuIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSnNvblZhbGlkYXRvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgaWYgKGNvbnRyb2wudmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGxldCBoYXNFcnJvcnMgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICBKU09OLnBhcnNlKGNvbnRyb2wudmFsdWUudHJpbSgpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhc0Vycm9ycyA9IHRydWU7XG4gIH1cbiAgaWYgKGhhc0Vycm9ycykge1xuICAgIHJldHVybiB7anNvblZhbGlkYXRvcjogdHJ1ZX07XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlc291cmNlVHlwZVZhbGlkYXRvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgaWYgKGNvbnRyb2wudmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IGhhc0Vycm9ycyA9IGZhbHNlO1xuICBsZXQganNvbiA9IG51bGw7XG4gIHRyeSB7XG4gICAganNvbiA9IEpTT04ucGFyc2UoY29udHJvbC52YWx1ZS50cmltKCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaGFzRXJyb3JzID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICghanNvbj8ucmVzb3VyY2VUeXBlKSB7XG4gICAgaGFzRXJyb3JzID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChoYXNFcnJvcnMpIHtcbiAgICByZXR1cm4ge3Jlc291cmNlVHlwZVZhbGlkYXRvcjogdHJ1ZX07XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cbiIsIlxuPGgxIG1hdC1kaWFsb2ctdGl0bGU+e3tkYXRhLnRpdGxlfX08L2gxPlxuPGZvcm0gW2Zvcm1Hcm91cF09XCJkaWFsb2dGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxuICAgICAgPG1hdC1sYWJlbD57e2RhdGEuaW5wdXRMYWJlbFRleHR9fTwvbWF0LWxhYmVsPlxuICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgI3RleHRhcmVhRWxlbWVudFxuICAgICAgICAgICAgICAgIChpbnB1dCk9XCJhdXRvUmVzaXplVGV4dGFyZWEodGV4dGFyZWFFbGVtZW50KVwiPjwvdGV4dGFyZWE+XG4gICAgICA8bWF0LWVycm9yPlxuICAgICAgICB7eyBkYXRhLnZhbGlkYXRvckVycm9ycyB9fVxuICAgICAgPC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG4gIDxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbWF0LXN0cm9rZWQtYnV0dG9uIChjbGljayk9XCJvbkNhbmNlbCgpXCIgY2RrRm9jdXNJbml0aWFsPnt7ZGF0YS5zZWNvbmRhcnlBY3Rpb25CdG5UaXRsZX19PC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwicHJpbWFyeVwiID57e2RhdGEucHJpbWFyeUFjdGlvbkJ0blRpdGxlfX08L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Zvcm0+XG5cbiJdfQ==