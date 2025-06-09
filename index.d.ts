import * as i0 from '@angular/core';
import { OnInit, OnChanges, SimpleChanges, AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import * as i1 from '@angular/router';
import { Router } from '@angular/router';
import * as i2 from '@angular/common';
import * as i3 from '@angular/platform-browser/animations';
import * as rxjs from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { UntypedFormGroup, ValidationErrors, AbstractControl } from '@angular/forms';

declare class NgxHisbCommonUiModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxHisbCommonUiModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxHisbCommonUiModule, never, [typeof i1.RouterLink, typeof i2.NgIf, typeof i3.BrowserAnimationsModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxHisbCommonUiModule>;
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

declare class HeaderComponent implements OnInit {
    configuration: HeaderConfig | undefined;
    title: string;
    version: string;
    subtitle: string;
    splitSubtitleEvenly: boolean;
    showUserManagement: boolean;
    backgroundColor: string;
    subtitleInsert: any;
    constructor();
    ngOnInit(): void;
    private splitSubtitle;
    openLink(link: string | undefined): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "common-header", never, { "configuration": { "alias": "configuration"; "required": false; }; "title": { "alias": "title"; "required": false; }; "version": { "alias": "version"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "splitSubtitleEvenly": { "alias": "splitSubtitleEvenly"; "required": false; }; "showUserManagement": { "alias": "showUserManagement"; "required": false; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; }; }, {}, never, never, true, never>;
}

type OptionConfig = {
    options: MenuOption[];
};
type MenuOption = {
    routerLink: string;
    label: string;
    iconName: string;
};

declare class NavMenuComponent implements OnChanges {
    private router;
    backgroundColor: string;
    contrastColor: string;
    options: OptionConfig;
    currentRoute: string;
    expanded: boolean;
    selectedOption: number;
    private currentRouteStr;
    currentRouteStr$: rxjs.Observable<string>;
    constructor(router: Router);
    toggleSize(): void;
    select(i: number): void;
    private setNavMenuInitialRoute;
    /**
     * We use this function to extract the current path from the current url
     * @param inputString
     * @private
     */
    private extractPath;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavMenuComponent, "common-nav-menu", never, { "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "contrastColor": { "alias": "contrastColor"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, {}, never, never, true, never>;
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

declare class ConformationDialogComponent implements OnInit {
    private dialogRef;
    private dialogData;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<any>, dialogData: DialogData);
    onSecondaryClick(): void;
    onDefaultClick(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConformationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConformationDialogComponent, "lib-confirmation-dialog", never, {}, {}, never, never, true, never>;
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

declare class TextInputDialogComponent implements OnInit, AfterViewInit {
    private dialogRef;
    private dialogData;
    textareaElement: ElementRef | undefined;
    minNumberOfRows: number;
    ngAfterViewInit(): void;
    data: TextInputDialogData;
    dialogForm: UntypedFormGroup;
    numRows: number;
    constructor(dialogRef: MatDialogRef<any>, dialogData: any);
    onCancel(): void;
    onSave(): void;
    ngOnInit(): void;
    onSubmit(): void;
    getValidationErrors(errors: ValidationErrors | null, errorTypes: any[] | undefined): string;
    autoResizeTextarea(textarea: HTMLTextAreaElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextInputDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextInputDialogComponent, "lib-text-input-dialog", never, {}, {}, never, never, true, never>;
}
declare function openTextInputDialog(dialog: MatDialog, dialogData?: TextInputDialogData): rxjs.Observable<any>;
declare function JsonValidator(control: AbstractControl): {
    jsonValidator: boolean;
};
declare function ResourceTypeValidator(control: AbstractControl): {
    resourceTypeValidator: boolean;
};

declare class CommonErrorComponent {
    errorCode: string | number;
    errorMessage: string;
    buttonName: string;
    buttonClickEvent: EventEmitter<any>;
    onBtnClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommonErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CommonErrorComponent, "lib-common-error", never, { "errorCode": { "alias": "errorCode"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; "buttonName": { "alias": "buttonName"; "required": false; }; }, { "buttonClickEvent": "buttonClickEvent"; }, never, never, true, never>;
}

export { CommonErrorComponent, ConformationDialogComponent, HeaderComponent, JsonValidator, NavMenuComponent, NgxHisbCommonUiModule, ResourceTypeValidator, TextInputDialogComponent, openConfirmationDialog, openTextInputDialog };
export type { DialogData, HeaderConfig, MenuOption, OptionConfig, TextInputDialogData, ValidatorType };
