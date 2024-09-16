import { Component, Input } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterLink } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu";
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
    }
    ngOnInit() {
        this.setCurrentRoute();
    }
    toggleSize() {
        this.expanded = !this.expanded;
    }
    select(i) {
        this.selectedOption = i;
    }
    /**
     * Sets the menu to correspond to the current route.
     * When the user reloads the app from a page different from home, we want to select the menu item corresponding to the current route.
     * @private
     */
    setCurrentRoute() {
        try {
            const currentRoute = this.getModuleUrl(this.router.url);
            this.selectedOption = this.options.options?.findIndex(el => el.routerLink == currentRoute) || 0; // assume that the first item of the menu is Home
        }
        catch (e) {
            console.error(e);
            this.router.navigate(['/']);
        }
    }
    getModuleUrl(inputString) {
        const firstSlashIndex = inputString.indexOf('/');
        if (firstSlashIndex === -1) {
            return '';
        }
        const secondSlashIndex = inputString.indexOf('/', firstSlashIndex + 1);
        if (secondSlashIndex === -1) {
            return inputString.substring(firstSlashIndex + 1); // Extract everything after the first slash
        }
        else {
            return inputString.substring(firstSlashIndex + 1, secondSlashIndex); // Extract the substring between the slashes
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NavMenuComponent, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0", type: NavMenuComponent, isStandalone: true, selector: "common-nav-menu", inputs: { backgroundColor: "backgroundColor", contrastColor: "contrastColor", options: "options" }, ngImport: i0, template: "<div class=\"menu-wrapper\" [style.background-color]=\"backgroundColor\" [style.width]=\"expanded ? '100px' : '50px'\">\n  <mat-toolbar color=primary>\n    <mat-toolbar-row [style.background-color]=\"backgroundColor\" [style.padding]=\"'0 0 0 0'\">\n      <div class=\"menu-button-wrapper\">\n        <button mat-icon-button aria-label=\"Menu\" (click)=\"toggleSize()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <div class=\"vertical-spacer\"></div>\n\n  @for (item of options.options; track item; let i = $index) {\n    <div class=\"option-wrapper\"\n      [style.background-color]=\"i === selectedOption ? contrastColor : backgroundColor \"\n      [style.color]=\"i === selectedOption ?  backgroundColor : contrastColor\"\n      (click)=\"select(i)\"\n      matTooltip=\"{{item.label}}\"\n      matTooltipPosition=\"after\"\n      [matTooltipDisabled]=\"expanded\"\n      [routerLink]=\"item.routerLink\"\n      >\n      <mat-icon [class]=\"expanded? 'scaled-icon' : 'small-icon'\" svgIcon=\"{{item.iconName}}\">\n      </mat-icon>\n      <br>\n        @if (expanded) {\n          <span class=\"icon-label-large\">{{item.label}}</span>\n        }\n      </div>\n    }\n  </div>\n", styles: [".menu-wrapper{color:#fff;margin:0;height:100%;text-align:center}.option-wrapper{margin:8px 0;cursor:pointer}.vertical-spacer{height:16px}.scaled-icon,.small-icon{font-size:32px;width:32px;height:32px}.icon-label-large{font-size:14px}.menu-button-wrapper{width:100%;padding:0}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i4.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i4.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i5.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: MatMenuModule }] }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUUzRCxPQUFPLEVBQVMsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0FBZ0JyRCxNQUFNLE9BQU8sZ0JBQWdCO0lBTzNCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTnpCLG9CQUFlLEdBQVcsU0FBUyxDQUFDO1FBQ3BDLGtCQUFhLEdBQVcsT0FBTyxDQUFDO1FBQ2hDLFlBQU8sR0FBaUIsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUM7UUFDL0MsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixtQkFBYyxHQUFHLENBQUMsQ0FBQztJQUVtQixDQUFDO0lBRXZDLFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQVM7UUFDZCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUVLLGVBQWU7UUFDckIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxpREFBaUQ7UUFDcEosQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUdPLFlBQVksQ0FBQyxXQUFXO1FBQzlCLE1BQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxlQUFlLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUMzQixPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7UUFDRCxNQUFNLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUIsT0FBTyxXQUFXLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLDJDQUEyQztRQUNoRyxDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sV0FBVyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyw0Q0FBNEM7UUFDbkgsQ0FBQztJQUNILENBQUM7OEdBakRVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLCtLQ3hCN0IsMnVDQWdDQSw4VURuQkksZUFBZSwySUFDZixhQUFhLG1MQUNiLGdCQUFnQix5UEFDaEIsZ0JBQWdCLDZUQUNoQixVQUFVLG1PQUNWLGFBQWE7OzJGQU1KLGdCQUFnQjtrQkFkNUIsU0FBUztpQ0FDSSxJQUFJLFdBQ0w7d0JBQ1QsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixVQUFVO3dCQUNWLGFBQWE7cUJBQ2hCLFlBQ1csaUJBQWlCOzJFQUtsQixlQUFlO3NCQUF2QixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPcHRpb25Db25maWd9IGZyb20gXCIuL29wdGlvbi5jb25maWdcIjtcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uXCI7XG5pbXBvcnQge01hdFRvb2xiYXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyXCI7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pY29uXCI7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwXCI7XG5cbmltcG9ydCB7Um91dGVyLCBSb3V0ZXJMaW5rfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9tZW51XCI7XG5cbkBDb21wb25lbnQoe1xuICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgUm91dGVyTGluayxcbiAgICBNYXRNZW51TW9kdWxlXG5dLFxuICBzZWxlY3RvcjogJ2NvbW1vbi1uYXYtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdi1tZW51LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSBcIiM2NDYwNjRcIjtcbiAgQElucHV0KCkgY29udHJhc3RDb2xvcjogc3RyaW5nID0gXCJ3aGl0ZVwiO1xuICBASW5wdXQoKSBvcHRpb25zOiBPcHRpb25Db25maWcgPSB7b3B0aW9uczogW119O1xuICBleHBhbmRlZDogYm9vbGVhbiA9IHRydWU7XG4gIHNlbGVjdGVkT3B0aW9uID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEN1cnJlbnRSb3V0ZSgpO1xuICB9XG5cbiAgdG9nZ2xlU2l6ZSgpIHtcbiAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG4gIH1cblxuICBzZWxlY3QoaTogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IGk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbWVudSB0byBjb3JyZXNwb25kIHRvIHRoZSBjdXJyZW50IHJvdXRlLlxuICAgKiBXaGVuIHRoZSB1c2VyIHJlbG9hZHMgdGhlIGFwcCBmcm9tIGEgcGFnZSBkaWZmZXJlbnQgZnJvbSBob21lLCB3ZSB3YW50IHRvIHNlbGVjdCB0aGUgbWVudSBpdGVtIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGN1cnJlbnQgcm91dGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG4gIHByaXZhdGUgc2V0Q3VycmVudFJvdXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjdXJyZW50Um91dGUgPSB0aGlzLmdldE1vZHVsZVVybCh0aGlzLnJvdXRlci51cmwpO1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMub3B0aW9ucy5vcHRpb25zPy5maW5kSW5kZXgoZWwgPT4gZWwucm91dGVyTGluayA9PSBjdXJyZW50Um91dGUpIHx8IDA7IC8vIGFzc3VtZSB0aGF0IHRoZSBmaXJzdCBpdGVtIG9mIHRoZSBtZW51IGlzIEhvbWVcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgIH1cbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZXRNb2R1bGVVcmwoaW5wdXRTdHJpbmcpIHtcbiAgICBjb25zdCBmaXJzdFNsYXNoSW5kZXggPSBpbnB1dFN0cmluZy5pbmRleE9mKCcvJyk7XG4gICAgaWYgKGZpcnN0U2xhc2hJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3Qgc2Vjb25kU2xhc2hJbmRleCA9IGlucHV0U3RyaW5nLmluZGV4T2YoJy8nLCBmaXJzdFNsYXNoSW5kZXggKyAxKTtcbiAgICBpZiAoc2Vjb25kU2xhc2hJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBpbnB1dFN0cmluZy5zdWJzdHJpbmcoZmlyc3RTbGFzaEluZGV4ICsgMSk7IC8vIEV4dHJhY3QgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3Qgc2xhc2hcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlucHV0U3RyaW5nLnN1YnN0cmluZyhmaXJzdFNsYXNoSW5kZXggKyAxLCBzZWNvbmRTbGFzaEluZGV4KTsgLy8gRXh0cmFjdCB0aGUgc3Vic3RyaW5nIGJldHdlZW4gdGhlIHNsYXNoZXNcbiAgICB9XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm1lbnUtd3JhcHBlclwiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImJhY2tncm91bmRDb2xvclwiIFtzdHlsZS53aWR0aF09XCJleHBhbmRlZCA/ICcxMDBweCcgOiAnNTBweCdcIj5cbiAgPG1hdC10b29sYmFyIGNvbG9yPXByaW1hcnk+XG4gICAgPG1hdC10b29sYmFyLXJvdyBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIiBbc3R5bGUucGFkZGluZ109XCInMCAwIDAgMCdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGFyaWEtbGFiZWw9XCJNZW51XCIgKGNsaWNrKT1cInRvZ2dsZVNpemUoKVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L21hdC10b29sYmFyLXJvdz5cbiAgPC9tYXQtdG9vbGJhcj5cblxuICA8ZGl2IGNsYXNzPVwidmVydGljYWwtc3BhY2VyXCI+PC9kaXY+XG5cbiAgQGZvciAoaXRlbSBvZiBvcHRpb25zLm9wdGlvbnM7IHRyYWNrIGl0ZW07IGxldCBpID0gJGluZGV4KSB7XG4gICAgPGRpdiBjbGFzcz1cIm9wdGlvbi13cmFwcGVyXCJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImkgPT09IHNlbGVjdGVkT3B0aW9uID8gY29udHJhc3RDb2xvciA6IGJhY2tncm91bmRDb2xvciBcIlxuICAgICAgW3N0eWxlLmNvbG9yXT1cImkgPT09IHNlbGVjdGVkT3B0aW9uID8gIGJhY2tncm91bmRDb2xvciA6IGNvbnRyYXN0Q29sb3JcIlxuICAgICAgKGNsaWNrKT1cInNlbGVjdChpKVwiXG4gICAgICBtYXRUb29sdGlwPVwie3tpdGVtLmxhYmVsfX1cIlxuICAgICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwiYWZ0ZXJcIlxuICAgICAgW21hdFRvb2x0aXBEaXNhYmxlZF09XCJleHBhbmRlZFwiXG4gICAgICBbcm91dGVyTGlua109XCJpdGVtLnJvdXRlckxpbmtcIlxuICAgICAgPlxuICAgICAgPG1hdC1pY29uIFtjbGFzc109XCJleHBhbmRlZD8gJ3NjYWxlZC1pY29uJyA6ICdzbWFsbC1pY29uJ1wiIHN2Z0ljb249XCJ7e2l0ZW0uaWNvbk5hbWV9fVwiPlxuICAgICAgPC9tYXQtaWNvbj5cbiAgICAgIDxicj5cbiAgICAgICAgQGlmIChleHBhbmRlZCkge1xuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1sYWJlbC1sYXJnZVwiPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gIDwvZGl2PlxuIl19