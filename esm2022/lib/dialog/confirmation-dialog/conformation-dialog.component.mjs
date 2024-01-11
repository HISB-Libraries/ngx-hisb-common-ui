import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogModule } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/common";
export class ConformationDialogComponent {
    constructor(dialogRef, dialogData) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.data = {};
    }
    onSecondaryClick() {
        this.dialogRef.close('secondaryAction');
    }
    onDefaultClick() {
        this.dialogRef.close('primaryAction');
    }
    ngOnInit() {
        this.data.title = this.dialogData.title ?? "";
        this.data.content = this.dialogData.content ?? "Do you want to continue?";
        this.data.primaryActionBtnTitle = this.dialogData.primaryActionBtnTitle ?? "Yes";
        this.data.secondaryActionBtnTitle = this.dialogData.secondaryActionBtnTitle ?? "No";
        this.data.width = this.dialogData.width ?? '4em';
        this.data.height = this.dialogData.width ?? '4em';
        this.data.isPrimaryButtonLeft = this.dialogData.isPrimaryButtonLeft ?? false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: ConformationDialogComponent, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.9", type: ConformationDialogComponent, isStandalone: true, selector: "lib-confirmation-dialog", ngImport: i0, template: "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <span [innerHTML]=\"data.content\"></span>\n</div>\n<div mat-dialog-actions align=\"end\">\n  <span *ngIf=\"!data.isPrimaryButtonLeft\">\n    <button mat-stroked-button (click)=\"onSecondaryClick()\">{{data.secondaryActionBtnTitle}}</button>\n    <button mat-stroked-button color=\"primary\" (click)=\"onDefaultClick()\" cdkFocusInitial>{{data.primaryActionBtnTitle}}</button>\n  </span>\n  <span *ngIf=\"data.isPrimaryButtonLeft\">\n    <button mat-stroked-button  (click)=\"onDefaultClick()\" cdkFocusInitial>{{data.primaryActionBtnTitle}}</button>\n    <button mat-stroked-button (click)=\"onSecondaryClick()\">{{data.secondaryActionBtnTitle}}</button>\n  </span>\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: ConformationDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-confirmation-dialog', standalone: true, imports: [
                        MatDialogModule,
                        MatButtonModule,
                        CommonModule
                    ], template: "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <span [innerHTML]=\"data.content\"></span>\n</div>\n<div mat-dialog-actions align=\"end\">\n  <span *ngIf=\"!data.isPrimaryButtonLeft\">\n    <button mat-stroked-button (click)=\"onSecondaryClick()\">{{data.secondaryActionBtnTitle}}</button>\n    <button mat-stroked-button color=\"primary\" (click)=\"onDefaultClick()\" cdkFocusInitial>{{data.primaryActionBtnTitle}}</button>\n  </span>\n  <span *ngIf=\"data.isPrimaryButtonLeft\">\n    <button mat-stroked-button  (click)=\"onDefaultClick()\" cdkFocusInitial>{{data.primaryActionBtnTitle}}</button>\n    <button mat-stroked-button (click)=\"onSecondaryClick()\">{{data.secondaryActionBtnTitle}}</button>\n  </span>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }] });
export function openConfirmationDialog(dialog, dialogData) {
    const config = new MatDialogConfig();
    config.autoFocus = true;
    config.width = dialogData?.width;
    config.height = dialogData?.height;
    config.data = {
        ...dialogData
    };
    const dialogRef = dialog.open(ConformationDialogComponent, config);
    return dialogRef.afterClosed();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZm9ybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaGlzYi1jb21tb24tdWkvc3JjL2xpYi9kaWFsb2cvY29uZmlybWF0aW9uLWRpYWxvZy9jb25mb3JtYXRpb24tZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1oaXNiLWNvbW1vbi11aS9zcmMvbGliL2RpYWxvZy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFDLGVBQWUsRUFBYSxlQUFlLEVBQUUsZUFBZSxFQUFlLE1BQU0sMEJBQTBCLENBQUM7QUFDcEgsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFjekQsTUFBTSxPQUFPLDJCQUEyQjtJQUl0QyxZQUNVLFNBQTRCLEVBQ0gsVUFBc0I7UUFEL0MsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFDSCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSnpELFNBQUksR0FBZSxFQUFFLENBQUM7SUFNdEIsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSwwQkFBMEIsQ0FBQztRQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLElBQUksS0FBSyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsSUFBSSxJQUFJLENBQUM7UUFDcEYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLElBQUksS0FBSyxDQUFDO0lBQy9FLENBQUM7OEdBMUJVLDJCQUEyQiw4Q0FNNUIsZUFBZTtrR0FOZCwyQkFBMkIsbUZDakJ4Qyw0dUJBY0EseURERkksZUFBZSx5YkFDZixlQUFlLDJOQUNmLFlBQVk7OzJGQUdILDJCQUEyQjtrQkFYdkMsU0FBUzsrQkFDRSx5QkFBeUIsY0FHdkIsSUFBSSxXQUNQO3dCQUNQLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixZQUFZO3FCQUNiOzswQkFRRSxNQUFNOzJCQUFDLGVBQWU7O0FBdUIzQixNQUFNLFVBQVUsc0JBQXNCLENBQUMsTUFBaUIsRUFBRSxVQUF1QjtJQUUvRSxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO0lBRXJDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLEtBQUssQ0FBQTtJQUNoQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsRUFBRSxNQUFNLENBQUM7SUFFbkMsTUFBTSxDQUFDLElBQUksR0FBRztRQUNaLEdBQUcsVUFBVTtLQUNkLENBQUE7SUFFRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRW5FLE9BQU8sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nLCBNYXREaWFsb2dDb25maWcsIE1hdERpYWxvZ01vZHVsZSwgTWF0RGlhbG9nUmVmfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9idXR0b25cIjtcbmltcG9ydCB7RGlhbG9nRGF0YX0gZnJvbSBcIi4uL2RvbWFpbi9kaWFsb2ctZGF0YVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29uZmlybWF0aW9uLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbmZvcm1hdGlvbkRpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGF0YTogRGlhbG9nRGF0YSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8YW55PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkaWFsb2dEYXRhOiBEaWFsb2dEYXRhXG4gICkge1xuICB9XG5cbiAgb25TZWNvbmRhcnlDbGljaygpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgnc2Vjb25kYXJ5QWN0aW9uJyk7XG4gIH1cblxuICBvbkRlZmF1bHRDbGljaygpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgncHJpbWFyeUFjdGlvbicpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhLnRpdGxlID0gdGhpcy5kaWFsb2dEYXRhLnRpdGxlID8/IFwiXCI7XG4gICAgdGhpcy5kYXRhLmNvbnRlbnQgPSB0aGlzLmRpYWxvZ0RhdGEuY29udGVudCA/PyBcIkRvIHlvdSB3YW50IHRvIGNvbnRpbnVlP1wiO1xuICAgIHRoaXMuZGF0YS5wcmltYXJ5QWN0aW9uQnRuVGl0bGUgPSB0aGlzLmRpYWxvZ0RhdGEucHJpbWFyeUFjdGlvbkJ0blRpdGxlID8/IFwiWWVzXCI7XG4gICAgdGhpcy5kYXRhLnNlY29uZGFyeUFjdGlvbkJ0blRpdGxlID0gdGhpcy5kaWFsb2dEYXRhLnNlY29uZGFyeUFjdGlvbkJ0blRpdGxlID8/IFwiTm9cIjtcbiAgICB0aGlzLmRhdGEud2lkdGggPSB0aGlzLmRpYWxvZ0RhdGEud2lkdGggPz8gJzRlbSc7XG4gICAgdGhpcy5kYXRhLmhlaWdodCA9IHRoaXMuZGlhbG9nRGF0YS53aWR0aCA/PyAnNGVtJztcbiAgICB0aGlzLmRhdGEuaXNQcmltYXJ5QnV0dG9uTGVmdCA9IHRoaXMuZGlhbG9nRGF0YS5pc1ByaW1hcnlCdXR0b25MZWZ0ID8/IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuQ29uZmlybWF0aW9uRGlhbG9nKGRpYWxvZzogTWF0RGlhbG9nLCBkaWFsb2dEYXRhPzogRGlhbG9nRGF0YSkge1xuXG4gIGNvbnN0IGNvbmZpZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcblxuICBjb25maWcuYXV0b0ZvY3VzID0gdHJ1ZTtcbiAgY29uZmlnLndpZHRoID0gZGlhbG9nRGF0YT8ud2lkdGhcbiAgY29uZmlnLmhlaWdodCA9IGRpYWxvZ0RhdGE/LmhlaWdodDtcblxuICBjb25maWcuZGF0YSA9IHtcbiAgICAuLi5kaWFsb2dEYXRhXG4gIH1cblxuICBjb25zdCBkaWFsb2dSZWYgPSBkaWFsb2cub3BlbihDb25mb3JtYXRpb25EaWFsb2dDb21wb25lbnQsIGNvbmZpZyk7XG5cbiAgcmV0dXJuIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpO1xufVxuIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+e3tkYXRhLnRpdGxlfX08L2gxPlxuPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIDxzcGFuIFtpbm5lckhUTUxdPVwiZGF0YS5jb250ZW50XCI+PC9zcGFuPlxuPC9kaXY+XG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxuICA8c3BhbiAqbmdJZj1cIiFkYXRhLmlzUHJpbWFyeUJ1dHRvbkxlZnRcIj5cbiAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiAoY2xpY2spPVwib25TZWNvbmRhcnlDbGljaygpXCI+e3tkYXRhLnNlY29uZGFyeUFjdGlvbkJ0blRpdGxlfX08L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib25EZWZhdWx0Q2xpY2soKVwiIGNka0ZvY3VzSW5pdGlhbD57e2RhdGEucHJpbWFyeUFjdGlvbkJ0blRpdGxlfX08L2J1dHRvbj5cbiAgPC9zcGFuPlxuICA8c3BhbiAqbmdJZj1cImRhdGEuaXNQcmltYXJ5QnV0dG9uTGVmdFwiPlxuICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uICAoY2xpY2spPVwib25EZWZhdWx0Q2xpY2soKVwiIGNka0ZvY3VzSW5pdGlhbD57e2RhdGEucHJpbWFyeUFjdGlvbkJ0blRpdGxlfX08L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiAoY2xpY2spPVwib25TZWNvbmRhcnlDbGljaygpXCI+e3tkYXRhLnNlY29uZGFyeUFjdGlvbkJ0blRpdGxlfX08L2J1dHRvbj5cbiAgPC9zcGFuPlxuPC9kaXY+XG4iXX0=