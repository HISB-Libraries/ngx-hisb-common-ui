import { Component, Input } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NavigationEnd, RouterLink } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu";
import { BehaviorSubject, filter, take } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/toolbar";
import * as i5 from "@angular/material/tooltip";
export class NavMenuComponent {
    constructor(router) {
        this.router = router;
        this.backgroundColor = "#646064";
        this.contrastColor = "white";
        this.options = { options: [] };
        this.expanded = true;
        this.selectedOption = 0;
        this.currentRouteStr = new BehaviorSubject('');
        this.currentRouteStr$ = this.currentRouteStr.asObservable();
        // To grab the router events immediately we need to subscribe to them in the constructor
        this.setNavMenuInitialRoute();
    }
    toggleSize() {
        this.expanded = !this.expanded;
    }
    select(i) {
        this.selectedOption = i;
    }
    setNavMenuInitialRoute() {
        this.router.events.pipe(filter(e => e instanceof NavigationEnd), take(1)).subscribe(event => {
            if (event?.['url']) {
                this.currentRoute = this.extractPath(event?.['url']);
                this.currentRouteStr.next(this.currentRoute);
            }
            // const index = this.options.options.findIndex(option=> option.routerLink == this.currentRoute);
            // if(index >= 0 ){
            //   this.selectedOption = index
            // }
        });
    }
    /**
     * We use this function to extract the current path from the current url
     * @param inputString
     * @private
     */
    extractPath(inputString) {
        const firstSlashIndex = inputString.indexOf('/');
        if (firstSlashIndex === -1) {
            return '';
        }
        const secondSlashIndex = inputString.indexOf('/', firstSlashIndex + 1);
        if (secondSlashIndex === -1) {
            return inputString.substring(firstSlashIndex + 1);
        }
        else {
            return inputString.substring(firstSlashIndex + 1, secondSlashIndex);
        }
    }
    ngAfterViewInit() {
        // // Now that we have the options object, we select the current route using the this.currentRoute variable.
        // // Note that this will be executed only one time when the page is loaded.
        // const index = this.options.options.findIndex(option=> option.routerLink == this.currentRoute);
        // if(index >= 0 ){
        //   this.selectedOption = index
        // }
        console.log("After view Init");
    }
    ngOnChanges(changes) {
        if (changes['options'].currentValue) {
            console.log("After view Init");
            this.currentRouteStr$.subscribe(currentRoute => {
                const index = this.options.options.findIndex(option => option.routerLink == currentRoute);
                if (index >= 0) {
                    this.selectedOption = index;
                }
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NavMenuComponent, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0", type: NavMenuComponent, isStandalone: true, selector: "common-nav-menu", inputs: { backgroundColor: "backgroundColor", contrastColor: "contrastColor", options: "options" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"menu-wrapper\" [style.background-color]=\"backgroundColor\" [style.width]=\"expanded ? '100px' : '50px'\">\n  <mat-toolbar color=primary>\n    <mat-toolbar-row [style.background-color]=\"backgroundColor\" [style.padding]=\"'0 0 0 0'\">\n      <div class=\"menu-button-wrapper\">\n        <button mat-icon-button aria-label=\"Menu\" (click)=\"toggleSize()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <div class=\"vertical-spacer\"></div>\n\n  @for (item of options.options; track item; let i = $index) {\n    <div class=\"option-wrapper\"\n      [style.background-color]=\"i === selectedOption ? contrastColor : backgroundColor \"\n      [style.color]=\"i === selectedOption ?  backgroundColor : contrastColor\"\n      (click)=\"select(i)\"\n      matTooltip=\"{{item.label}}\"\n      matTooltipPosition=\"after\"\n      [matTooltipDisabled]=\"expanded\"\n      [routerLink]=\"item.routerLink\"\n      >\n      <mat-icon [class]=\"expanded? 'scaled-icon' : 'small-icon'\" svgIcon=\"{{item.iconName}}\">\n      </mat-icon>\n      <br>\n        @if (expanded) {\n          <span class=\"icon-label-large\">{{item.label}}</span>\n        }\n      </div>\n    }\n  </div>\n", styles: [".menu-wrapper{color:#fff;margin:0;height:100%;text-align:center}.option-wrapper{margin:8px 0;cursor:pointer}.vertical-spacer{height:16px}.scaled-icon,.small-icon{font-size:32px;width:32px;height:32px}.icon-label-large{font-size:14px}.menu-button-wrapper{width:100%;padding:0}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i4.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i4.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i5.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: MatMenuModule }] }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsS0FBSyxFQUEyQixNQUFNLGVBQWUsQ0FBQztBQUV4RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRTNELE9BQU8sRUFBQyxhQUFhLEVBQVUsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUUsTUFBTSxFQUFXLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQWlCNUQsTUFBTSxPQUFPLGdCQUFnQjtJQWEzQixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVp6QixvQkFBZSxHQUFXLFNBQVMsQ0FBQztRQUNwQyxrQkFBYSxHQUFXLE9BQU8sQ0FBQztRQUNoQyxZQUFPLEdBQWlCLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxDQUFDO1FBRy9DLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFFWCxvQkFBZSxHQUFHLElBQUksZUFB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LGdCQUFnQiw2VEFDaEIsVUFBVSxtT0FDVixhQUFhOzsyRkFNSixnQkFBZ0I7a0JBZDVCLFNBQVM7aUNBQ0ksSUFBSSxXQUNMO3dCQUNULGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixhQUFhO3FCQUNoQixZQUNXLGlCQUFpQjsyRUFLbEIsZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T3B0aW9uQ29uZmlnfSBmcm9tIFwiLi9vcHRpb24uY29uZmlnXCI7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xuaW1wb3J0IHtNYXRUb29sYmFyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhclwiO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xuaW1wb3J0IHtNYXRUb29sdGlwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcFwiO1xuXG5pbXBvcnQge05hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTGlua30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtNYXRNZW51TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudVwiO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIGZpbHRlciwgU3ViamVjdCwgdGFrZX0gZnJvbSBcInJ4anNcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIFJvdXRlckxpbmssXG4gICAgTWF0TWVudU1vZHVsZVxuXSxcbiAgc2VsZWN0b3I6ICdjb21tb24tbmF2LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtbWVudS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzICBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXN7XG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gXCIjNjQ2MDY0XCI7XG4gIEBJbnB1dCgpIGNvbnRyYXN0Q29sb3I6IHN0cmluZyA9IFwid2hpdGVcIjtcbiAgQElucHV0KCkgb3B0aW9uczogT3B0aW9uQ29uZmlnID0ge29wdGlvbnM6IFtdfTtcbiAgY3VycmVudFJvdXRlOiBzdHJpbmc7IC8vV2Ugb25seSB1c2UgdGhpcyB2YXJpYWJsZSB0byBzdG9yZSB0aGUgY3VycmVudCByb3V0ZSwgaXQgaXMgc2V0IGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgdXNlciBpbiB0aGUgbmdBZnRlckluaXRcblxuICBleHBhbmRlZDogYm9vbGVhbiA9IHRydWU7XG4gIHNlbGVjdGVkT3B0aW9uID0gMDtcblxuICBwcml2YXRlIGN1cnJlbnRSb3V0ZVN0ciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gIGN1cnJlbnRSb3V0ZVN0ciQgPSB0aGlzLmN1cnJlbnRSb3V0ZVN0ci5hc09ic2VydmFibGUoKTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAvLyBUbyBncmFiIHRoZSByb3V0ZXIgZXZlbnRzIGltbWVkaWF0ZWx5IHdlIG5lZWQgdG8gc3Vic2NyaWJlIHRvIHRoZW0gaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgdGhpcy5zZXROYXZNZW51SW5pdGlhbFJvdXRlKCk7XG4gIH1cblxuICB0b2dnbGVTaXplKCkge1xuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgfVxuXG4gIHNlbGVjdChpOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gaTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TmF2TWVudUluaXRpYWxSb3V0ZSgpe1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICAgdGFrZSgxKSxcbiAgICApLnN1YnNjcmliZShldmVudCA9PiB7XG5cbiAgICAgIGlmKGV2ZW50Py5bJ3VybCddKXtcbiAgICAgICAgdGhpcy5jdXJyZW50Um91dGUgPSB0aGlzLmV4dHJhY3RQYXRoKGV2ZW50Py5bJ3VybCddKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Um91dGVTdHIubmV4dCh0aGlzLmN1cnJlbnRSb3V0ZSk7XG4gICAgICB9XG4gICAgICAvLyBjb25zdCBpbmRleCA9IHRoaXMub3B0aW9ucy5vcHRpb25zLmZpbmRJbmRleChvcHRpb249PiBvcHRpb24ucm91dGVyTGluayA9PSB0aGlzLmN1cnJlbnRSb3V0ZSk7XG4gICAgICAvLyBpZihpbmRleCA+PSAwICl7XG4gICAgICAvLyAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBpbmRleFxuICAgICAgLy8gfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogV2UgdXNlIHRoaXMgZnVuY3Rpb24gdG8gZXh0cmFjdCB0aGUgY3VycmVudCBwYXRoIGZyb20gdGhlIGN1cnJlbnQgdXJsXG4gICAqIEBwYXJhbSBpbnB1dFN0cmluZ1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBleHRyYWN0UGF0aChpbnB1dFN0cmluZzogc3RyaW5nKSB7XG4gICAgY29uc3QgZmlyc3RTbGFzaEluZGV4ID0gaW5wdXRTdHJpbmcuaW5kZXhPZignLycpO1xuXG4gICAgaWYgKGZpcnN0U2xhc2hJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBzZWNvbmRTbGFzaEluZGV4ID0gaW5wdXRTdHJpbmcuaW5kZXhPZignLycsIGZpcnN0U2xhc2hJbmRleCArIDEpO1xuXG4gICAgaWYgKHNlY29uZFNsYXNoSW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gaW5wdXRTdHJpbmcuc3Vic3RyaW5nKGZpcnN0U2xhc2hJbmRleCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaW5wdXRTdHJpbmcuc3Vic3RyaW5nKGZpcnN0U2xhc2hJbmRleCArIDEsIHNlY29uZFNsYXNoSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyAvLyBOb3cgdGhhdCB3ZSBoYXZlIHRoZSBvcHRpb25zIG9iamVjdCwgd2Ugc2VsZWN0IHRoZSBjdXJyZW50IHJvdXRlIHVzaW5nIHRoZSB0aGlzLmN1cnJlbnRSb3V0ZSB2YXJpYWJsZS5cbiAgICAvLyAvLyBOb3RlIHRoYXQgdGhpcyB3aWxsIGJlIGV4ZWN1dGVkIG9ubHkgb25lIHRpbWUgd2hlbiB0aGUgcGFnZSBpcyBsb2FkZWQuXG4gICAgLy8gY29uc3QgaW5kZXggPSB0aGlzLm9wdGlvbnMub3B0aW9ucy5maW5kSW5kZXgob3B0aW9uPT4gb3B0aW9uLnJvdXRlckxpbmsgPT0gdGhpcy5jdXJyZW50Um91dGUpO1xuICAgIC8vIGlmKGluZGV4ID49IDAgKXtcbiAgICAvLyAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBpbmRleFxuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZyhcIkFmdGVyIHZpZXcgSW5pdFwiKVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmKGNoYW5nZXNbJ29wdGlvbnMnXS5jdXJyZW50VmFsdWUpe1xuICAgICAgY29uc29sZS5sb2coXCJBZnRlciB2aWV3IEluaXRcIik7XG4gICAgICB0aGlzLmN1cnJlbnRSb3V0ZVN0ciQuc3Vic2NyaWJlKCBjdXJyZW50Um91dGUgPT57XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vcHRpb25zLm9wdGlvbnMuZmluZEluZGV4KG9wdGlvbj0+IG9wdGlvbi5yb3V0ZXJMaW5rID09Y3VycmVudFJvdXRlKVxuICAgICAgICBpZihpbmRleCA+PSAwICl7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IGluZGV4XG4gICAgICAgIH19IClcblxuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibWVudS13cmFwcGVyXCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCIgW3N0eWxlLndpZHRoXT1cImV4cGFuZGVkID8gJzEwMHB4JyA6ICc1MHB4J1wiPlxuICA8bWF0LXRvb2xiYXIgY29sb3I9cHJpbWFyeT5cbiAgICA8bWF0LXRvb2xiYXItcm93IFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImJhY2tncm91bmRDb2xvclwiIFtzdHlsZS5wYWRkaW5nXT1cIicwIDAgMCAwJ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIk1lbnVcIiAoY2xpY2spPVwidG9nZ2xlU2l6ZSgpXCI+XG4gICAgICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWF0LXRvb2xiYXItcm93PlxuICA8L21hdC10b29sYmFyPlxuXG4gIDxkaXYgY2xhc3M9XCJ2ZXJ0aWNhbC1zcGFjZXJcIj48L2Rpdj5cblxuICBAZm9yIChpdGVtIG9mIG9wdGlvbnMub3B0aW9uczsgdHJhY2sgaXRlbTsgbGV0IGkgPSAkaW5kZXgpIHtcbiAgICA8ZGl2IGNsYXNzPVwib3B0aW9uLXdyYXBwZXJcIlxuICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiaSA9PT0gc2VsZWN0ZWRPcHRpb24gPyBjb250cmFzdENvbG9yIDogYmFja2dyb3VuZENvbG9yIFwiXG4gICAgICBbc3R5bGUuY29sb3JdPVwiaSA9PT0gc2VsZWN0ZWRPcHRpb24gPyAgYmFja2dyb3VuZENvbG9yIDogY29udHJhc3RDb2xvclwiXG4gICAgICAoY2xpY2spPVwic2VsZWN0KGkpXCJcbiAgICAgIG1hdFRvb2x0aXA9XCJ7e2l0ZW0ubGFiZWx9fVwiXG4gICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJhZnRlclwiXG4gICAgICBbbWF0VG9vbHRpcERpc2FibGVkXT1cImV4cGFuZGVkXCJcbiAgICAgIFtyb3V0ZXJMaW5rXT1cIml0ZW0ucm91dGVyTGlua1wiXG4gICAgICA+XG4gICAgICA8bWF0LWljb24gW2NsYXNzXT1cImV4cGFuZGVkPyAnc2NhbGVkLWljb24nIDogJ3NtYWxsLWljb24nXCIgc3ZnSWNvbj1cInt7aXRlbS5pY29uTmFtZX19XCI+XG4gICAgICA8L21hdC1pY29uPlxuICAgICAgPGJyPlxuICAgICAgICBAaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWxhYmVsLWxhcmdlXCI+e3tpdGVtLmxhYmVsfX08L3NwYW4+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgPC9kaXY+XG4iXX0=