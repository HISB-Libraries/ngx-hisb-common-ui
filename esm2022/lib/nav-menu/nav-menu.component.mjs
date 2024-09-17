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
    ngOnChanges(changes) {
        if (changes['options'].currentValue) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFM0QsT0FBTyxFQUFDLGFBQWEsRUFBVSxVQUFVLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0FBaUJuRCxNQUFNLE9BQU8sZ0JBQWdCO0lBYTNCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBWnpCLG9CQUFlLEdBQVcsU0FBUyxDQUFDO1FBQ3BDLGtCQUFhLEdBQVcsT0FBTyxDQUFDO1FBQ2hDLFlBQU8sR0FBaUIsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUM7UUFHL0MsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUVYLG9CQUFlLEdBQUcsSUFBSSxlQUFl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SyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T3B0aW9uQ29uZmlnfSBmcm9tIFwiLi9vcHRpb24uY29uZmlnXCI7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xuaW1wb3J0IHtNYXRUb29sYmFyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhclwiO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xuaW1wb3J0IHtNYXRUb29sdGlwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcFwiO1xuXG5pbXBvcnQge05hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTGlua30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtNYXRNZW51TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudVwiO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIGZpbHRlciwgdGFrZX0gZnJvbSBcInJ4anNcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIFJvdXRlckxpbmssXG4gICAgTWF0TWVudU1vZHVsZVxuXSxcbiAgc2VsZWN0b3I6ICdjb21tb24tbmF2LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtbWVudS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzICBPbkNoYW5nZXN7XG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gXCIjNjQ2MDY0XCI7XG4gIEBJbnB1dCgpIGNvbnRyYXN0Q29sb3I6IHN0cmluZyA9IFwid2hpdGVcIjtcbiAgQElucHV0KCkgb3B0aW9uczogT3B0aW9uQ29uZmlnID0ge29wdGlvbnM6IFtdfTtcbiAgY3VycmVudFJvdXRlOiBzdHJpbmc7IC8vV2Ugb25seSB1c2UgdGhpcyB2YXJpYWJsZSB0byBzdG9yZSB0aGUgY3VycmVudCByb3V0ZSwgaXQgaXMgc2V0IGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgdXNlciBpbiB0aGUgbmdBZnRlckluaXRcblxuICBleHBhbmRlZDogYm9vbGVhbiA9IHRydWU7XG4gIHNlbGVjdGVkT3B0aW9uID0gMDtcblxuICBwcml2YXRlIGN1cnJlbnRSb3V0ZVN0ciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gIGN1cnJlbnRSb3V0ZVN0ciQgPSB0aGlzLmN1cnJlbnRSb3V0ZVN0ci5hc09ic2VydmFibGUoKTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAvLyBUbyBncmFiIHRoZSByb3V0ZXIgZXZlbnRzIGltbWVkaWF0ZWx5IHdlIG5lZWQgdG8gc3Vic2NyaWJlIHRvIHRoZW0gaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgdGhpcy5zZXROYXZNZW51SW5pdGlhbFJvdXRlKCk7XG4gIH1cblxuICB0b2dnbGVTaXplKCkge1xuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgfVxuXG4gIHNlbGVjdChpOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gaTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TmF2TWVudUluaXRpYWxSb3V0ZSgpe1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICAgdGFrZSgxKSxcbiAgICApLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBpZihldmVudD8uWyd1cmwnXSl7XG4gICAgICAgIHRoaXMuY3VycmVudFJvdXRlID0gdGhpcy5leHRyYWN0UGF0aChldmVudD8uWyd1cmwnXSk7XG4gICAgICAgIHRoaXMuY3VycmVudFJvdXRlU3RyLm5leHQodGhpcy5jdXJyZW50Um91dGUpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogV2UgdXNlIHRoaXMgZnVuY3Rpb24gdG8gZXh0cmFjdCB0aGUgY3VycmVudCBwYXRoIGZyb20gdGhlIGN1cnJlbnQgdXJsXG4gICAqIEBwYXJhbSBpbnB1dFN0cmluZ1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBleHRyYWN0UGF0aChpbnB1dFN0cmluZzogc3RyaW5nKSB7XG4gICAgY29uc3QgZmlyc3RTbGFzaEluZGV4ID0gaW5wdXRTdHJpbmcuaW5kZXhPZignLycpO1xuXG4gICAgaWYgKGZpcnN0U2xhc2hJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBzZWNvbmRTbGFzaEluZGV4ID0gaW5wdXRTdHJpbmcuaW5kZXhPZignLycsIGZpcnN0U2xhc2hJbmRleCArIDEpO1xuXG4gICAgaWYgKHNlY29uZFNsYXNoSW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gaW5wdXRTdHJpbmcuc3Vic3RyaW5nKGZpcnN0U2xhc2hJbmRleCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaW5wdXRTdHJpbmcuc3Vic3RyaW5nKGZpcnN0U2xhc2hJbmRleCArIDEsIHNlY29uZFNsYXNoSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZihjaGFuZ2VzWydvcHRpb25zJ10uY3VycmVudFZhbHVlKXtcbiAgICAgIHRoaXMuY3VycmVudFJvdXRlU3RyJC5zdWJzY3JpYmUoIGN1cnJlbnRSb3V0ZSA9PntcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm9wdGlvbnMub3B0aW9ucy5maW5kSW5kZXgob3B0aW9uPT4gb3B0aW9uLnJvdXRlckxpbmsgPT1jdXJyZW50Um91dGUpXG4gICAgICAgIGlmKGluZGV4ID49IDAgKXtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gaW5kZXhcbiAgICAgICAgfX0pXG4gICAgfVxuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtZW51LXdyYXBwZXJcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIiBbc3R5bGUud2lkdGhdPVwiZXhwYW5kZWQgPyAnMTAwcHgnIDogJzUwcHgnXCI+XG4gIDxtYXQtdG9vbGJhciBjb2xvcj1wcmltYXJ5PlxuICAgIDxtYXQtdG9vbGJhci1yb3cgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCIgW3N0eWxlLnBhZGRpbmddPVwiJzAgMCAwIDAnXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVudS1idXR0b24td3JhcHBlclwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBhcmlhLWxhYmVsPVwiTWVudVwiIChjbGljayk9XCJ0b2dnbGVTaXplKClcIj5cbiAgICAgICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYXQtdG9vbGJhci1yb3c+XG4gIDwvbWF0LXRvb2xiYXI+XG5cbiAgPGRpdiBjbGFzcz1cInZlcnRpY2FsLXNwYWNlclwiPjwvZGl2PlxuXG4gIEBmb3IgKGl0ZW0gb2Ygb3B0aW9ucy5vcHRpb25zOyB0cmFjayBpdGVtOyBsZXQgaSA9ICRpbmRleCkge1xuICAgIDxkaXYgY2xhc3M9XCJvcHRpb24td3JhcHBlclwiXG4gICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJpID09PSBzZWxlY3RlZE9wdGlvbiA/IGNvbnRyYXN0Q29sb3IgOiBiYWNrZ3JvdW5kQ29sb3IgXCJcbiAgICAgIFtzdHlsZS5jb2xvcl09XCJpID09PSBzZWxlY3RlZE9wdGlvbiA/ICBiYWNrZ3JvdW5kQ29sb3IgOiBjb250cmFzdENvbG9yXCJcbiAgICAgIChjbGljayk9XCJzZWxlY3QoaSlcIlxuICAgICAgbWF0VG9vbHRpcD1cInt7aXRlbS5sYWJlbH19XCJcbiAgICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cImFmdGVyXCJcbiAgICAgIFttYXRUb29sdGlwRGlzYWJsZWRdPVwiZXhwYW5kZWRcIlxuICAgICAgW3JvdXRlckxpbmtdPVwiaXRlbS5yb3V0ZXJMaW5rXCJcbiAgICAgID5cbiAgICAgIDxtYXQtaWNvbiBbY2xhc3NdPVwiZXhwYW5kZWQ/ICdzY2FsZWQtaWNvbicgOiAnc21hbGwtaWNvbidcIiBzdmdJY29uPVwie3tpdGVtLmljb25OYW1lfX1cIj5cbiAgICAgIDwvbWF0LWljb24+XG4gICAgICA8YnI+XG4gICAgICAgIEBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tbGFiZWwtbGFyZ2VcIj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgfVxuICA8L2Rpdj5cbiJdfQ==