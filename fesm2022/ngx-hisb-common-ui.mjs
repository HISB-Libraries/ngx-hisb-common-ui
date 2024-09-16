import * as i0 from '@angular/core';
import { NgModule, Component, Input, Inject, ViewChild, EventEmitter, Output } from '@angular/core';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2$1 from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as i1 from '@angular/router';
import { RouterLink } from '@angular/router';
import * as i5 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import { NgIf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i4 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import * as i5$1 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i1$1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import * as i3$1 from '@angular/forms';
import { UntypedFormGroup, UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import * as i4$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i5$2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';

class NgxHisbCommonUiModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NgxHisbCommonUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.0", ngImport: i0, type: NgxHisbCommonUiModule, imports: [MatIconModule,
            MatToolbarModule,
            RouterLink,
            MatDividerModule,
            NgIf,
            BrowserAnimationsModule,
            MatButtonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NgxHisbCommonUiModule, imports: [MatIconModule,
            MatToolbarModule,
            MatDividerModule,
            BrowserAnimationsModule,
            MatButtonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NgxHisbCommonUiModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        MatIconModule,
                        MatToolbarModule,
                        RouterLink,
                        MatDividerModule,
                        NgIf,
                        BrowserAnimationsModule,
                        MatButtonModule,
                    ],
                }]
        }] });

class HeaderComponent {
    constructor() {
        this.title = "";
        this.version = "";
        this.subtitle = "";
        this.splitSubtitleEvenly = false;
        this.showUserManagement = false;
        this.backgroundColor = "#646064";
        this.subtitleInsert = undefined;
    }
    ngOnInit() {
        if (this.splitSubtitleEvenly) {
            this.subtitleInsert = this.splitSubtitle(this.subtitle);
        }
        else {
            this.subtitleInsert = this.subtitle;
        }
    }
    splitSubtitle(subtitle) {
        const subtitleWordList = subtitle.split(" ");
        const halfLength = Math.floor(subtitleWordList.length / 2);
        let recombinedSubtitle = "";
        subtitleWordList.map((word, i) => {
            recombinedSubtitle += word + " ";
            if (i == halfLength) {
                recombinedSubtitle += "<br>";
            }
        });
        return recombinedSubtitle;
    }
    openLink(link) {
        if (link)
            window.open(link, '_blank');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0", type: HeaderComponent, isStandalone: true, selector: "common-header", inputs: { configuration: "configuration", title: "title", version: "version", subtitle: "subtitle", splitSubtitleEvenly: "splitSubtitleEvenly", showUserManagement: "showUserManagement", backgroundColor: "backgroundColor" }, ngImport: i0, template: "<mat-toolbar class=\"header\">\n\n  <mat-toolbar-row [style.background-color]=\"backgroundColor\">\n    <div class=\"title\" [routerLink]=\"'/'\" [style.cursor]=\"'pointer'\">{{ title }}</div>\n\n    <div class=\"subtitle\">\n      <p [innerHTML]=\"subtitleInsert\">\n      </p>\n    </div>\n\n    <div class=\"content-spacer\"></div>\n    @if (version) {\n      <div class=\"version-label\">\n        Version: {{ version }}\n      </div>\n    }\n    @if (configuration?.menuItem) {\n      <div>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </div>\n    }\n    <div>\n      @if (showUserManagement) {\n        <button mat-icon-button aria-label=\"User Management\">\n          <mat-icon>account_circle</mat-icon>\n        </button>\n      }\n    </div>\n  </mat-toolbar-row>\n\n  <mat-menu #menu=\"matMenu\">\n    @for (item of configuration?.menuItem; track item) {\n\n      @if (item.divider) {\n        <mat-divider></mat-divider>\n      }\n      @if (!item.divider) {\n        <button mat-menu-item (click)=\"openLink(item.link)\">\n          <span>{{ item.label }}</span>\n        </button>\n      }\n\n    }\n  </mat-menu>\n</mat-toolbar>\n\n\n\n<!--&lt;!&ndash; Add links to major features as they are implemented here. &ndash;&gt;-->\n\n\n\n\n<!--<mat-menu #menu=\"matMenu\">-->\n<!--  <button mat-menu-item onclick=\"window.open('https://ravendocs.readthedocs.io/en/latest/','_blank')\">-->\n<!--    <span>Documentation</span>-->\n<!--  </button>-->\n<!--  <button mat-menu-item onclick=\"window.open('https://github.com/MortalityReporting','_blank')\">-->\n<!--    <span>Mortality Reporting GitHub</span>-->\n<!--  </button>-->\n<!--  <mat-divider></mat-divider>-->\n<!--  <button mat-menu-item onclick=\"window.open('https://chat.fhir.org','_blank')\">-->\n<!--    <span>FHIR Zulip Chat</span>-->\n<!--  </button>-->\n<!--</mat-menu>-->\n\n", styles: [".title{margin-left:10px}.subtitle{margin-left:30px;font-size:small;width:600px;white-space:normal}.subtitle p{overflow-wrap:break-word;line-height:normal;margin:0}.version-label{font-weight:700;font-size:small;margin:5px}.content-spacer{flex:1 1 auto}.header{background-color:indigo;color:#fff}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i2$1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i2$1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i4.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "component", type: i4.MatMenuItem, selector: "[mat-menu-item]", inputs: ["role", "disabled", "disableRipple"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i4.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: MatDividerModule }, { kind: "component", type: i5.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "ngmodule", type: BrowserModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, imports: [
                        MatButtonModule,
                        MatToolbarModule,
                        MatIconModule,
                        MatMenuModule,
                        RouterLink,
                        MatDividerModule,
                        BrowserModule
                    ], selector: 'common-header', template: "<mat-toolbar class=\"header\">\n\n  <mat-toolbar-row [style.background-color]=\"backgroundColor\">\n    <div class=\"title\" [routerLink]=\"'/'\" [style.cursor]=\"'pointer'\">{{ title }}</div>\n\n    <div class=\"subtitle\">\n      <p [innerHTML]=\"subtitleInsert\">\n      </p>\n    </div>\n\n    <div class=\"content-spacer\"></div>\n    @if (version) {\n      <div class=\"version-label\">\n        Version: {{ version }}\n      </div>\n    }\n    @if (configuration?.menuItem) {\n      <div>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </div>\n    }\n    <div>\n      @if (showUserManagement) {\n        <button mat-icon-button aria-label=\"User Management\">\n          <mat-icon>account_circle</mat-icon>\n        </button>\n      }\n    </div>\n  </mat-toolbar-row>\n\n  <mat-menu #menu=\"matMenu\">\n    @for (item of configuration?.menuItem; track item) {\n\n      @if (item.divider) {\n        <mat-divider></mat-divider>\n      }\n      @if (!item.divider) {\n        <button mat-menu-item (click)=\"openLink(item.link)\">\n          <span>{{ item.label }}</span>\n        </button>\n      }\n\n    }\n  </mat-menu>\n</mat-toolbar>\n\n\n\n<!--&lt;!&ndash; Add links to major features as they are implemented here. &ndash;&gt;-->\n\n\n\n\n<!--<mat-menu #menu=\"matMenu\">-->\n<!--  <button mat-menu-item onclick=\"window.open('https://ravendocs.readthedocs.io/en/latest/','_blank')\">-->\n<!--    <span>Documentation</span>-->\n<!--  </button>-->\n<!--  <button mat-menu-item onclick=\"window.open('https://github.com/MortalityReporting','_blank')\">-->\n<!--    <span>Mortality Reporting GitHub</span>-->\n<!--  </button>-->\n<!--  <mat-divider></mat-divider>-->\n<!--  <button mat-menu-item onclick=\"window.open('https://chat.fhir.org','_blank')\">-->\n<!--    <span>FHIR Zulip Chat</span>-->\n<!--  </button>-->\n<!--</mat-menu>-->\n\n", styles: [".title{margin-left:10px}.subtitle{margin-left:30px;font-size:small;width:600px;white-space:normal}.subtitle p{overflow-wrap:break-word;line-height:normal;margin:0}.version-label{font-weight:700;font-size:small;margin:5px}.content-spacer{flex:1 1 auto}.header{background-color:indigo;color:#fff}\n"] }]
        }], ctorParameters: () => [], propDecorators: { configuration: [{
                type: Input
            }], title: [{
                type: Input
            }], version: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], splitSubtitleEvenly: [{
                type: Input
            }], showUserManagement: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }] } });

class NavMenuComponent {
    constructor(router) {
        this.router = router;
        this.backgroundColor = "#646064";
        this.contrastColor = "white";
        this.options = { options: [] };
        this.expanded = true;
        this.selectedOption = 0;
    }
    ngOnInit() {
        this.setCurrentRoute();
    }
    toggleSize() {
        this.expanded = !this.expanded;
    }
    select(i) {
        this.selectedOption = i;
    }
    /**
     * Sets the menu to correspond to the current route.
     * When the user reloads the app from a page different from home, we want to select the menu item corresponding to the current route.
     * @private
     */
    setCurrentRoute() {
        try {
            const currentRoute = this.getModuleUrl(this.router.url);
            this.selectedOption = this.options.options?.findIndex(el => el.routerLink == currentRoute) || 0; // assume that the first item of the menu is Home
        }
        catch (e) {
            console.error(e);
            this.router.navigate(['/']);
        }
    }
    getModuleUrl(inputString) {
        const firstSlashIndex = inputString.indexOf('/');
        if (firstSlashIndex === -1) {
            return '';
        }
        const secondSlashIndex = inputString.indexOf('/', firstSlashIndex + 1);
        if (secondSlashIndex === -1) {
            return inputString.substring(firstSlashIndex + 1); // Extract everything after the first slash
        }
        else {
            return inputString.substring(firstSlashIndex + 1, secondSlashIndex); // Extract the substring between the slashes
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NavMenuComponent, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0", type: NavMenuComponent, isStandalone: true, selector: "common-nav-menu", inputs: { backgroundColor: "backgroundColor", contrastColor: "contrastColor", options: "options" }, ngImport: i0, template: "<div class=\"menu-wrapper\" [style.background-color]=\"backgroundColor\" [style.width]=\"expanded ? '100px' : '50px'\">\n  <mat-toolbar color=primary>\n    <mat-toolbar-row [style.background-color]=\"backgroundColor\" [style.padding]=\"'0 0 0 0'\">\n      <div class=\"menu-button-wrapper\">\n        <button mat-icon-button aria-label=\"Menu\" (click)=\"toggleSize()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <div class=\"vertical-spacer\"></div>\n\n  @for (item of options.options; track item; let i = $index) {\n    <div class=\"option-wrapper\"\n      [style.background-color]=\"i === selectedOption ? contrastColor : backgroundColor \"\n      [style.color]=\"i === selectedOption ?  backgroundColor : contrastColor\"\n      (click)=\"select(i)\"\n      matTooltip=\"{{item.label}}\"\n      matTooltipPosition=\"after\"\n      [matTooltipDisabled]=\"expanded\"\n      [routerLink]=\"item.routerLink\"\n      >\n      <mat-icon [class]=\"expanded? 'scaled-icon' : 'small-icon'\" svgIcon=\"{{item.iconName}}\">\n      </mat-icon>\n      <br>\n        @if (expanded) {\n          <span class=\"icon-label-large\">{{item.label}}</span>\n        }\n      </div>\n    }\n  </div>\n", styles: [".menu-wrapper{color:#fff;margin:0;height:100%;text-align:center}.option-wrapper{margin:8px 0;cursor:pointer}.vertical-spacer{height:16px}.scaled-icon,.small-icon{font-size:32px;width:32px;height:32px}.icon-label-large{font-size:14px}.menu-button-wrapper{width:100%;padding:0}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i2$1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i2$1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i5$1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: MatMenuModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NavMenuComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, imports: [
                        MatButtonModule,
                        MatIconModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        RouterLink,
                        MatMenuModule
                    ], selector: 'common-nav-menu', template: "<div class=\"menu-wrapper\" [style.background-color]=\"backgroundColor\" [style.width]=\"expanded ? '100px' : '50px'\">\n  <mat-toolbar color=primary>\n    <mat-toolbar-row [style.background-color]=\"backgroundColor\" [style.padding]=\"'0 0 0 0'\">\n      <div class=\"menu-button-wrapper\">\n        <button mat-icon-button aria-label=\"Menu\" (click)=\"toggleSize()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <div class=\"vertical-spacer\"></div>\n\n  @for (item of options.options; track item; let i = $index) {\n    <div class=\"option-wrapper\"\n      [style.background-color]=\"i === selectedOption ? contrastColor : backgroundColor \"\n      [style.color]=\"i === selectedOption ?  backgroundColor : contrastColor\"\n      (click)=\"select(i)\"\n      matTooltip=\"{{item.label}}\"\n      matTooltipPosition=\"after\"\n      [matTooltipDisabled]=\"expanded\"\n      [routerLink]=\"item.routerLink\"\n      >\n      <mat-icon [class]=\"expanded? 'scaled-icon' : 'small-icon'\" svgIcon=\"{{item.iconName}}\">\n      </mat-icon>\n      <br>\n        @if (expanded) {\n          <span class=\"icon-label-large\">{{item.label}}</span>\n        }\n      </div>\n    }\n  </div>\n", styles: [".menu-wrapper{color:#fff;margin:0;height:100%;text-align:center}.option-wrapper{margin:8px 0;cursor:pointer}.vertical-spacer{height:16px}.scaled-icon,.small-icon{font-size:32px;width:32px;height:32px}.icon-label-large{font-size:14px}.menu-button-wrapper{width:100%;padding:0}\n"] }]
        }], ctorParameters: () => [{ type: i1.Router }], propDecorators: { backgroundColor: [{
                type: Input
            }], contrastColor: [{
                type: Input
            }], options: [{
                type: Input
            }] } });

class ConformationDialogComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: ConformationDialogComponent, deps: [{ token: i1$1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0", type: ConformationDialogComponent, isStandalone: true, selector: "lib-confirmation-dialog", ngImport: i0, template: "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <span [innerHTML]=\"data.content\"></span>\n</div>\n<div mat-dialog-actions align=\"end\">\n  @if (!data.isPrimaryButtonLeft) {\n      <button mat-stroked-button (click)=\"onSecondaryClick()\">{{data.secondaryActionBtnTitle}}</button>\n      <button mat-stroked-button color=\"primary\" (click)=\"onDefaultClick()\" cdkFocusInitial>{{data.primaryActionBtnTitle}}</button>\n  }\n  @if (data.isPrimaryButtonLeft) {\n      <button mat-stroked-button  (click)=\"onDefaultClick()\" cdkFocusInitial>{{data.primaryActionBtnTitle}}</button>\n      <button mat-stroked-button (click)=\"onSecondaryClick()\">{{data.secondaryActionBtnTitle}}</button>\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i1$1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1$1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: i1$1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: ConformationDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-confirmation-dialog', standalone: true, imports: [
                        MatDialogModule,
                        MatButtonModule
                    ], template: "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <span [innerHTML]=\"data.content\"></span>\n</div>\n<div mat-dialog-actions align=\"end\">\n  @if (!data.isPrimaryButtonLeft) {\n      <button mat-stroked-button (click)=\"onSecondaryClick()\">{{data.secondaryActionBtnTitle}}</button>\n      <button mat-stroked-button color=\"primary\" (click)=\"onDefaultClick()\" cdkFocusInitial>{{data.primaryActionBtnTitle}}</button>\n  }\n  @if (data.isPrimaryButtonLeft) {\n      <button mat-stroked-button  (click)=\"onDefaultClick()\" cdkFocusInitial>{{data.primaryActionBtnTitle}}</button>\n      <button mat-stroked-button (click)=\"onSecondaryClick()\">{{data.secondaryActionBtnTitle}}</button>\n  }\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1$1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }] });
function openConfirmationDialog(dialog, dialogData) {
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

class TextInputDialogComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: TextInputDialogComponent, deps: [{ token: i1$1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0", type: TextInputDialogComponent, isStandalone: true, selector: "lib-text-input-dialog", viewQueries: [{ propertyName: "textareaElement", first: true, predicate: ["textareaElement"], descendants: true }], ngImport: i0, template: "\n<h1 mat-dialog-title>{{data.title}}</h1>\n<form [formGroup]=\"dialogForm\" (ngSubmit)=\"onSubmit()\">\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" style=\"width: 100%\">\n      <mat-label>{{data.inputLabelText}}</mat-label>\n      <textarea type=\"text\" matInput formControlName=\"content\"\n                #textareaElement\n                (input)=\"autoResizeTextarea(textareaElement)\"></textarea>\n      <mat-error>\n        {{ data.validatorErrors }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions align=\"end\">\n    <button type=\"button\" mat-stroked-button (click)=\"onCancel()\" cdkFocusInitial>{{data.secondaryActionBtnTitle}}</button>\n    <button mat-stroked-button type=\"submit\" color=\"primary\" >{{data.primaryActionBtnTitle}}</button>\n  </div>\n</form>\n\n", styles: ["textarea{font-size:13px;font-family:monospace!important}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4$1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i4$1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i1$1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1$1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: i1$1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
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
        }], ctorParameters: () => [{ type: i1$1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }], propDecorators: { textareaElement: [{
                type: ViewChild,
                args: ['textareaElement']
            }] } });
function openTextInputDialog(dialog, dialogData) {
    const config = new MatDialogConfig();
    config.autoFocus = true;
    config.width = dialogData?.width ?? "80%";
    config.data = {
        ...dialogData
    };
    const dialogRef = dialog.open(TextInputDialogComponent, config);
    return dialogRef.afterClosed();
}
function JsonValidator(control) {
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
function ResourceTypeValidator(control) {
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

class CommonErrorComponent {
    constructor() {
        this.errorMessage = "Server error. Please check the developer console for details.";
        this.buttonName = "Retry";
        this.buttonClickEvent = new EventEmitter();
    }
    onBtnClick() {
        this.buttonClickEvent.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CommonErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0", type: CommonErrorComponent, isStandalone: true, selector: "lib-common-error", inputs: { errorCode: "errorCode", errorMessage: "errorMessage", buttonName: "buttonName" }, outputs: { buttonClickEvent: "buttonClickEvent" }, ngImport: i0, template: "\n<div class=\"box\">\n  @if (errorCode) {\n    <div class=\"error-code\">Error Code: {{ errorCode }}</div>\n  }\n  <div class=\"error-message\">{{ errorMessage }}</div>\n  <div class=\"action-button\">\n    <button mat-raised-button (click)=\"onBtnClick()\">{{ buttonName }}</button>\n  </div>\n</div>\n", styles: [".box{display:flex;align-items:center;justify-content:center;flex-direction:column;height:24vh}.error-code{font-size:xx-large;margin-bottom:32px}.error-message{font-size:large;width:40vh;text-align:center}.action-button{margin-top:24px}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: BrowserModule }] }); }
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

/*
 * Public API Surface of ngx-hisb-common-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CommonErrorComponent, ConformationDialogComponent, HeaderComponent, JsonValidator, NavMenuComponent, NgxHisbCommonUiModule, ResourceTypeValidator, TextInputDialogComponent, openConfirmationDialog, openTextInputDialog };
//# sourceMappingURL=ngx-hisb-common-ui.mjs.map
