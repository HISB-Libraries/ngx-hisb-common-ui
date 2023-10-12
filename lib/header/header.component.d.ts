import { OnInit } from '@angular/core';
import { HeaderConfig } from "./header.config";
import * as i0 from "@angular/core";
export declare class HeaderComponent implements OnInit {
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
