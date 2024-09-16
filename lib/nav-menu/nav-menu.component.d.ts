import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OptionConfig } from "./option.config";
import { Router } from "@angular/router";
import * as i0 from "@angular/core";
export declare class NavMenuComponent implements OnChanges, OnInit {
    private router;
    backgroundColor: string;
    contrastColor: string;
    options: OptionConfig;
    currentOption: number;
    expanded: boolean;
    selectedOption: number;
    constructor(router: Router);
    toggleSize(): void;
    select(i: number): void;
    ngOnChanges(changes: SimpleChanges): void;
    private setNavMenuInitialRoute;
    private extractPath;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavMenuComponent, "common-nav-menu", never, { "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "contrastColor": { "alias": "contrastColor"; "required": false; }; "options": { "alias": "options"; "required": false; }; "currentOption": { "alias": "currentOption"; "required": false; }; }, {}, never, never, true, never>;
}
