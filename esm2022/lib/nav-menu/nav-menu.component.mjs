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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsS0FBSyxFQUEyQixNQUFNLGVBQWUsQ0FBQztBQUV4RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRTNELE9BQU8sRUFBQyxhQUFhLEVBQVUsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQWlCbkQsTUFBTSxPQUFPLGdCQUFnQjtJQWEzQixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVp6QixvQkFBZSxHQUFXLFNBQVMsQ0FBQztRQUNwQyxrQkFBYSxHQUFXLE9BQU8sQ0FBQztRQUNoQyxZQUFPLEdBQWlCLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxDQUFDO1FBRy9DLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFFWCxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzFELHFCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFJckQsd0ZBQXdGO1FBQ3hGLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFTO1FBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVPLHNCQUFzQjtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3JCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxhQUFhLENBQUMsRUFDdkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLElBQUcsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLFdBQVcsQ0FBQyxXQUFtQjtRQUNyQyxNQUFNLGVBQWUsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpELElBQUksZUFBZSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDM0IsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdkUsSUFBSSxnQkFBZ0IsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVCLE9BQU8sV0FBVyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksRUFBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFFLFlBQVksQ0FBQyxFQUFFO2dCQUM5QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFBLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFHLFlBQVksQ0FBQyxDQUFBO2dCQUN2RixJQUFHLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDZCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQTtnQkFDN0IsQ0FBQztZQUFBLENBQUMsQ0FBQyxDQUFBO1FBQ1AsQ0FBQztJQUNILENBQUM7OEdBcEVVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLG9NQzFCN0IsMnVDQWdDQSw4VURqQkksZUFBZSwySUFDZixhQUFhLG1MQUNiLGdCQUFnQix5UEFDaEIsZ0JBQWdCLDZUQUNoQixVQUFVLG1PQUNWLGFBQWE7OzJGQU1KLGdCQUFnQjtrQkFkNUIsU0FBUztpQ0FDSSxJQUFJLFdBQ0w7d0JBQ1QsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixVQUFVO3dCQUNWLGFBQWE7cUJBQ2hCLFlBQ1csaUJBQWlCOzJFQUtsQixlQUFlO3NCQUF2QixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPcHRpb25Db25maWd9IGZyb20gXCIuL29wdGlvbi5jb25maWdcIjtcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uXCI7XG5pbXBvcnQge01hdFRvb2xiYXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyXCI7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pY29uXCI7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwXCI7XG5cbmltcG9ydCB7TmF2aWdhdGlvbkVuZCwgUm91dGVyLCBSb3V0ZXJMaW5rfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9tZW51XCI7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgZmlsdGVyLCB0YWtlfSBmcm9tIFwicnhqc1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgUm91dGVyTGluayxcbiAgICBNYXRNZW51TW9kdWxlXG5dLFxuICBzZWxlY3RvcjogJ2NvbW1vbi1uYXYtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdi1tZW51LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IGltcGxlbWVudHMgIE9uQ2hhbmdlc3tcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSBcIiM2NDYwNjRcIjtcbiAgQElucHV0KCkgY29udHJhc3RDb2xvcjogc3RyaW5nID0gXCJ3aGl0ZVwiO1xuICBASW5wdXQoKSBvcHRpb25zOiBPcHRpb25Db25maWcgPSB7b3B0aW9uczogW119O1xuICBjdXJyZW50Um91dGU6IHN0cmluZzsgLy9XZSBvbmx5IHVzZSB0aGlzIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBjdXJyZW50IHJvdXRlLCBpdCBpcyBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCB1c2VyIGluIHRoZSBuZ0FmdGVySW5pdFxuXG4gIGV4cGFuZGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgc2VsZWN0ZWRPcHRpb24gPSAwO1xuXG4gIHByaXZhdGUgY3VycmVudFJvdXRlU3RyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgY3VycmVudFJvdXRlU3RyJCA9IHRoaXMuY3VycmVudFJvdXRlU3RyLmFzT2JzZXJ2YWJsZSgpO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIC8vIFRvIGdyYWIgdGhlIHJvdXRlciBldmVudHMgaW1tZWRpYXRlbHkgd2UgbmVlZCB0byBzdWJzY3JpYmUgdG8gdGhlbSBpbiB0aGUgY29uc3RydWN0b3JcbiAgICB0aGlzLnNldE5hdk1lbnVJbml0aWFsUm91dGUoKTtcbiAgfVxuXG4gIHRvZ2dsZVNpemUoKSB7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICB9XG5cbiAgc2VsZWN0KGk6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXROYXZNZW51SW5pdGlhbFJvdXRlKCl7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICBmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICB0YWtlKDEpLFxuICAgICkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmKGV2ZW50Py5bJ3VybCddKXtcbiAgICAgICAgdGhpcy5jdXJyZW50Um91dGUgPSB0aGlzLmV4dHJhY3RQYXRoKGV2ZW50Py5bJ3VybCddKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Um91dGVTdHIubmV4dCh0aGlzLmN1cnJlbnRSb3V0ZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSB1c2UgdGhpcyBmdW5jdGlvbiB0byBleHRyYWN0IHRoZSBjdXJyZW50IHBhdGggZnJvbSB0aGUgY3VycmVudCB1cmxcbiAgICogQHBhcmFtIGlucHV0U3RyaW5nXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIGV4dHJhY3RQYXRoKGlucHV0U3RyaW5nOiBzdHJpbmcpIHtcbiAgICBjb25zdCBmaXJzdFNsYXNoSW5kZXggPSBpbnB1dFN0cmluZy5pbmRleE9mKCcvJyk7XG5cbiAgICBpZiAoZmlyc3RTbGFzaEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY29uZFNsYXNoSW5kZXggPSBpbnB1dFN0cmluZy5pbmRleE9mKCcvJywgZmlyc3RTbGFzaEluZGV4ICsgMSk7XG5cbiAgICBpZiAoc2Vjb25kU2xhc2hJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBpbnB1dFN0cmluZy5zdWJzdHJpbmcoZmlyc3RTbGFzaEluZGV4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpbnB1dFN0cmluZy5zdWJzdHJpbmcoZmlyc3RTbGFzaEluZGV4ICsgMSwgc2Vjb25kU2xhc2hJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmKGNoYW5nZXNbJ29wdGlvbnMnXS5jdXJyZW50VmFsdWUpe1xuICAgICAgY29uc29sZS5sb2coXCJBZnRlciB2aWV3IEluaXRcIik7XG4gICAgICB0aGlzLmN1cnJlbnRSb3V0ZVN0ciQuc3Vic2NyaWJlKCBjdXJyZW50Um91dGUgPT57XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vcHRpb25zLm9wdGlvbnMuZmluZEluZGV4KG9wdGlvbj0+IG9wdGlvbi5yb3V0ZXJMaW5rID09Y3VycmVudFJvdXRlKVxuICAgICAgICBpZihpbmRleCA+PSAwICl7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IGluZGV4XG4gICAgICAgIH19KVxuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibWVudS13cmFwcGVyXCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCIgW3N0eWxlLndpZHRoXT1cImV4cGFuZGVkID8gJzEwMHB4JyA6ICc1MHB4J1wiPlxuICA8bWF0LXRvb2xiYXIgY29sb3I9cHJpbWFyeT5cbiAgICA8bWF0LXRvb2xiYXItcm93IFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImJhY2tncm91bmRDb2xvclwiIFtzdHlsZS5wYWRkaW5nXT1cIicwIDAgMCAwJ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIk1lbnVcIiAoY2xpY2spPVwidG9nZ2xlU2l6ZSgpXCI+XG4gICAgICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWF0LXRvb2xiYXItcm93PlxuICA8L21hdC10b29sYmFyPlxuXG4gIDxkaXYgY2xhc3M9XCJ2ZXJ0aWNhbC1zcGFjZXJcIj48L2Rpdj5cblxuICBAZm9yIChpdGVtIG9mIG9wdGlvbnMub3B0aW9uczsgdHJhY2sgaXRlbTsgbGV0IGkgPSAkaW5kZXgpIHtcbiAgICA8ZGl2IGNsYXNzPVwib3B0aW9uLXdyYXBwZXJcIlxuICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiaSA9PT0gc2VsZWN0ZWRPcHRpb24gPyBjb250cmFzdENvbG9yIDogYmFja2dyb3VuZENvbG9yIFwiXG4gICAgICBbc3R5bGUuY29sb3JdPVwiaSA9PT0gc2VsZWN0ZWRPcHRpb24gPyAgYmFja2dyb3VuZENvbG9yIDogY29udHJhc3RDb2xvclwiXG4gICAgICAoY2xpY2spPVwic2VsZWN0KGkpXCJcbiAgICAgIG1hdFRvb2x0aXA9XCJ7e2l0ZW0ubGFiZWx9fVwiXG4gICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJhZnRlclwiXG4gICAgICBbbWF0VG9vbHRpcERpc2FibGVkXT1cImV4cGFuZGVkXCJcbiAgICAgIFtyb3V0ZXJMaW5rXT1cIml0ZW0ucm91dGVyTGlua1wiXG4gICAgICA+XG4gICAgICA8bWF0LWljb24gW2NsYXNzXT1cImV4cGFuZGVkPyAnc2NhbGVkLWljb24nIDogJ3NtYWxsLWljb24nXCIgc3ZnSWNvbj1cInt7aXRlbS5pY29uTmFtZX19XCI+XG4gICAgICA8L21hdC1pY29uPlxuICAgICAgPGJyPlxuICAgICAgICBAaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWxhYmVsLWxhcmdlXCI+e3tpdGVtLmxhYmVsfX08L3NwYW4+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgPC9kaXY+XG4iXX0=