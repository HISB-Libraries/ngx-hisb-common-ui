import { AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { OptionConfig } from "./option.config";
import { Router } from "@angular/router";
import * as i0 from "@angular/core";
export declare class NavMenuComponent implements AfterViewInit, OnChanges {
    private router;
    backgroundColor: string;
    contrastColor: string;
    options: OptionConfig;
    currentRoute: string;
    expanded: boolean;
    selectedOption: number;
    private currentRouteStr;
    currentRouteStr$: import("rxjs").Observable<string>;
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
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavMenuComponent, "common-nav-menu", never, { "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "contrastColor": { "alias": "contrastColor"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, {}, never, never, true, never>;
}
