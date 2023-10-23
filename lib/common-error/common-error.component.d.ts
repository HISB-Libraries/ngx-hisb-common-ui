import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CommonErrorComponent {
    errorCode: string | number;
    errorMessage: string;
    buttonName: string;
    buttonClickEvent: EventEmitter<any>;
    onBtnClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommonErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CommonErrorComponent, "lib-common-error", never, { "errorCode": { "alias": "errorCode"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; "buttonName": { "alias": "buttonName"; "required": false; }; }, { "buttonClickEvent": "buttonClickEvent"; }, never, never, true, never>;
}
