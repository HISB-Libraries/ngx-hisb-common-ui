import { OnChanges, SimpleChanges } from '@angular/core';
import { OptionConfig } from "./option.config";
import { ActivatedRoute } from "@angular/router";
import * as i0 from "@angular/core";
export declare class NavMenuComponent implements OnChanges {
    private activatedRoute;
    backgroundColor: string;
    contrastColor: string;
    options: OptionConfig;
    currentOption: number;
    expanded: boolean;
    selectedOption: number;
    constructor(activatedRoute: ActivatedRoute);
    toggleSize(): void;
    select(i: number): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavMenuComponent, "common-nav-menu", never, { "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "contrastColor": { "alias": "contrastColor"; "required": false; }; "options": { "alias": "options"; "required": false; }; "currentOption": { "alias": "currentOption"; "required": false; }; }, {}, never, never, true, never>;
}
