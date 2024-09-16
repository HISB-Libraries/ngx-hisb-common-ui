import { OnInit } from '@angular/core';
import { OptionConfig } from "./option.config";
import { ActivatedRoute } from "@angular/router";
import * as i0 from "@angular/core";
export declare class NavMenuComponent implements OnInit {
    private activatedRoute;
    backgroundColor: string;
    contrastColor: string;
    options: OptionConfig;
    expanded: boolean;
    selectedOption: number;
    constructor(activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    toggleSize(): void;
    select(i: number): void;
    /**
     * Sets the menu to correspond to the current route.
     * When the user reloads the app from a page different from home, we want to select the menu item corresponding to the current route.
     * @private
     */
    private setCurrentRoute;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavMenuComponent, "common-nav-menu", never, { "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "contrastColor": { "alias": "contrastColor"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, {}, never, never, true, never>;
}
