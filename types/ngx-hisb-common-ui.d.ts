import * as _angular_core from '@angular/core';
import { AfterViewInit, ElementRef } from '@angular/core';
import * as i1 from '@angular/router';
import * as i2 from '@angular/common';
import * as i3 from '@angular/platform-browser/animations';
import * as rxjs from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AbstractControl, UntypedFormGroup, ValidationErrors } from '@angular/forms';

declare class NgxHisbCommonUiModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<NgxHisbCommonUiModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<NgxHisbCommonUiModule, never, [typeof i1.RouterLink, typeof i2.NgIf, typeof i3.BrowserAnimationsModule], never>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<NgxHisbCommonUiModule>;
}

type HeaderConfig = {
    title?: string;
    subtitle?: string;
    version?: string;
    backgroundColor?: string;
    splitSubtitleEvenly?: boolean;
    showUserManagement?: boolean;
    menuItem?: menuItem[];
};
type menuItem = {
    divider?: boolean;
    label?: string;
    link?: string;
};

declare class HeaderComponent {
    configuration: _angular_core.InputSignal<HeaderConfig>;
    title: _angular_core.InputSignal<string>;
    version: _angular_core.InputSignal<string>;
    subtitle: _angular_core.InputSignal<string>;
    splitSubtitleEvenly: _angular_core.InputSignal<boolean>;
    showUserManagement: _angular_core.InputSignal<boolean>;
    backgroundColor: _angular_core.InputSignal<string>;
    subtitleInsert: _angular_core.Signal<string>;
    private splitSubtitle;
    openLink(link: string | undefined): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<HeaderComponent, "common-header", never, { "configuration": { "alias": "configuration"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "version": { "alias": "version"; "required": false; "isSignal": true; }; "subtitle": { "alias": "subtitle"; "required": false; "isSignal": true; }; "splitSubtitleEvenly": { "alias": "splitSubtitleEvenly"; "required": false; "isSignal": true; }; "showUserManagement": { "alias": "showUserManagement"; "required": false; "isSignal": true; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

type OptionConfig = {
    options: MenuOption[];
};
type MenuOption = {
    routerLink: string;
    label: string;
    iconName: string;
};

declare class NavMenuComponent {
    backgroundColor: _angular_core.InputSignal<string>;
    contrastColor: _angular_core.InputSignal<string>;
    options: _angular_core.InputSignal<OptionConfig>;
    expanded: _angular_core.WritableSignal<boolean>;
    selectedOption: _angular_core.WritableSignal<number>;
    private currentRouteStr;
    private router;
    constructor();
    toggleSize(): void;
    select(i: number): void;
    private setNavMenuInitialRoute;
    /**
     * We use this function to extract the current path from the current url
     * @param inputString
     * @private
     */
    private extractPath;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<NavMenuComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<NavMenuComponent, "common-nav-menu", never, { "backgroundColor": { "alias": "backgroundColor"; "required": false; "isSignal": true; }; "contrastColor": { "alias": "contrastColor"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

interface DialogData {
    title?: string;
    content?: string;
    primaryActionBtnTitle?: string;
    secondaryActionBtnTitle?: string;
    isPrimaryButtonLeft?: boolean;
    width?: string;
    height?: string;
}

declare class ConformationDialogComponent {
    private dialogRef;
    private dialogData;
    data: DialogData;
    onSecondaryClick(): void;
    onDefaultClick(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ConformationDialogComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ConformationDialogComponent, "lib-confirmation-dialog", never, {}, {}, never, never, true, never>;
}
declare function openConfirmationDialog(dialog: MatDialog, dialogData?: DialogData): rxjs.Observable<any>;

interface ValidatorType {
    name: string;
    display: string;
}
interface TextInputDialogData extends DialogData {
    inputLabelText?: string;
    validatorErrors?: string;
    formValidators?: any[];
    formValidationTypes?: ValidatorType[];
}

declare class TextInputDialogComponent implements AfterViewInit {
    textareaElement: _angular_core.Signal<ElementRef<any>>;
    minNumberOfRows: number;
    private dialogRef;
    private dialogData;
    data: TextInputDialogData;
    dialogForm: UntypedFormGroup;
    numRows: number;
    constructor();
    ngAfterViewInit(): void;
    onCancel(): void;
    onSave(): void;
    onSubmit(): void;
    getValidationErrors(errors: ValidationErrors | null, errorTypes: any[] | undefined): string;
    autoResizeTextarea(textarea: HTMLTextAreaElement): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TextInputDialogComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<TextInputDialogComponent, "lib-text-input-dialog", never, {}, {}, never, never, true, never>;
}
declare function openTextInputDialog(dialog: MatDialog, dialogData?: TextInputDialogData): rxjs.Observable<any>;
declare function JsonValidator(control: AbstractControl): {
    jsonValidator: boolean;
};
declare function ResourceTypeValidator(control: AbstractControl): {
    resourceTypeValidator: boolean;
};

declare class CommonErrorComponent {
    errorCode: _angular_core.InputSignal<string | number>;
    errorMessage: _angular_core.InputSignal<string>;
    buttonName: _angular_core.InputSignal<string>;
    buttonClickEvent: _angular_core.OutputEmitterRef<void>;
    onBtnClick(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<CommonErrorComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<CommonErrorComponent, "lib-common-error", never, { "errorCode": { "alias": "errorCode"; "required": false; "isSignal": true; }; "errorMessage": { "alias": "errorMessage"; "required": false; "isSignal": true; }; "buttonName": { "alias": "buttonName"; "required": false; "isSignal": true; }; }, { "buttonClickEvent": "buttonClickEvent"; }, never, never, true, never>;
}

export { CommonErrorComponent, ConformationDialogComponent, HeaderComponent, JsonValidator, NavMenuComponent, NgxHisbCommonUiModule, ResourceTypeValidator, TextInputDialogComponent, openConfirmationDialog, openTextInputDialog };
export type { DialogData, HeaderConfig, MenuOption, OptionConfig, TextInputDialogData, ValidatorType };
