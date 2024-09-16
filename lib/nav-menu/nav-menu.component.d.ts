import { OnInit } from '@angular/core';
import { OptionConfig } from "./option.config";
import { Router } from "@angular/router";
import * as i0 from "@angular/core";
export declare class NavMenuComponent implements OnInit {
    private router;
    backgroundColor: string;
    contrastColor: string;
    options: OptionConfig;
    expanded: boolean;
    selectedOption: number;
    constructor(router: Router);
    ngOnInit(): void;
    toggleSize(): void;
    select(i: number): void;
    /**
     * Sets the menu to correspond to the current route.
     * When the user reloads the app from a page different from home, we want to select the menu item corresponding to the current route.
     * @private
     */
    private setCurrentRoute;
    private getModuleUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavMenuComponent, "common-nav-menu", never, { "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "contrastColor": { "alias": "contrastColor"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, {}, never, never, true, never>;
}
