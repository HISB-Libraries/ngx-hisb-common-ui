import { Component, Input } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterLink } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu";
import { take } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/toolbar";
import * as i5 from "@angular/material/tooltip";
export class NavMenuComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
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
        this.activatedRoute.url.pipe(take(1)).subscribe(result => {
            this.selectedOption = this.options.options?.findIndex(el => el.routerLink == result?.[0].path) || 0;
            console.log(result);
            console.log(this.selectedOption);
        });
        // try {
        //
        //   const currentRoute = this.getModuleUrl(this.router.url);
        //   this.selectedOption = this.options.options?.findIndex(el => el.routerLink == currentRoute) || 0; // assume that the first item of the menu is Home
        // } catch (e) {
        //   console.error(e);
        //   this.router.navigate(['/']);
        // }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NavMenuComponent, deps: [{ token: i1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component }); }
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
        }], ctorParameters: () => [{ type: i1.ActivatedRoute }], propDecorators: { backgroundColor: [{
                type: Input
            }], contrastColor: [{
                type: Input
            }], options: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUUzRCxPQUFPLEVBQXlCLFVBQVUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQU8sSUFBSSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0FBZ0JoQyxNQUFNLE9BQU8sZ0JBQWdCO0lBTzNCLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU56QyxvQkFBZSxHQUFXLFNBQVMsQ0FBQztRQUNwQyxrQkFBYSxHQUFXLE9BQU8sQ0FBQztRQUNoQyxZQUFPLEdBQWlCLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxDQUFDO1FBQy9DLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsbUJBQWMsR0FBRyxDQUFDLENBQUM7SUFFbUMsQ0FBQztJQUV2RCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFTO1FBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFFSyxlQUFlO1FBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQzdDLE1BQU0sQ0FBQyxFQUFFO1lBQ1AsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FFRixDQUFDO1FBQ0YsUUFBUTtRQUNSLEVBQUU7UUFDRiw2REFBNkQ7UUFDN0QsdUpBQXVKO1FBQ3ZKLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsaUNBQWlDO1FBQ2pDLElBQUk7SUFDTixDQUFDOzhHQTVDVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQiwrS0N6QjdCLDJ1Q0FnQ0EsOFVEbEJJLGVBQWUsMklBQ2YsYUFBYSxtTEFDYixnQkFBZ0IseVBBQ2hCLGdCQUFnQiw2VEFDaEIsVUFBVSxtT0FDVixhQUFhOzsyRkFNSixnQkFBZ0I7a0JBZDVCLFNBQVM7aUNBQ0ksSUFBSSxXQUNMO3dCQUNULGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixhQUFhO3FCQUNoQixZQUNXLGlCQUFpQjttRkFLbEIsZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T3B0aW9uQ29uZmlnfSBmcm9tIFwiLi9vcHRpb24uY29uZmlnXCI7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xuaW1wb3J0IHtNYXRUb29sYmFyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhclwiO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xuaW1wb3J0IHtNYXRUb29sdGlwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcFwiO1xuXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIFJvdXRlckxpbmt9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL21lbnVcIjtcbmltcG9ydCB7cGlwZSwgdGFrZX0gZnJvbSBcInJ4anNcIjtcblxuQENvbXBvbmVudCh7XG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgaW1wb3J0czogW1xuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBSb3V0ZXJMaW5rLFxuICAgIE1hdE1lbnVNb2R1bGVcbl0sXG4gIHNlbGVjdG9yOiAnY29tbW9uLW5hdi1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LW1lbnUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9IFwiIzY0NjA2NFwiO1xuICBASW5wdXQoKSBjb250cmFzdENvbG9yOiBzdHJpbmcgPSBcIndoaXRlXCI7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IE9wdGlvbkNvbmZpZyA9IHtvcHRpb25zOiBbXX07XG4gIGV4cGFuZGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgc2VsZWN0ZWRPcHRpb24gPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEN1cnJlbnRSb3V0ZSgpO1xuICB9XG5cbiAgdG9nZ2xlU2l6ZSgpIHtcbiAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG4gIH1cblxuICBzZWxlY3QoaTogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IGk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbWVudSB0byBjb3JyZXNwb25kIHRvIHRoZSBjdXJyZW50IHJvdXRlLlxuICAgKiBXaGVuIHRoZSB1c2VyIHJlbG9hZHMgdGhlIGFwcCBmcm9tIGEgcGFnZSBkaWZmZXJlbnQgZnJvbSBob21lLCB3ZSB3YW50IHRvIHNlbGVjdCB0aGUgbWVudSBpdGVtIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGN1cnJlbnQgcm91dGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG4gIHByaXZhdGUgc2V0Q3VycmVudFJvdXRlKCkge1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUudXJsLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKFxuICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMub3B0aW9ucy5vcHRpb25zPy5maW5kSW5kZXgoZWwgPT4gZWwucm91dGVyTGluayA9PSByZXN1bHQ/LlswXS5wYXRoKSB8fCAwO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkT3B0aW9uKVxuICAgICAgfVxuXG4gICAgKTtcbiAgICAvLyB0cnkge1xuICAgIC8vXG4gICAgLy8gICBjb25zdCBjdXJyZW50Um91dGUgPSB0aGlzLmdldE1vZHVsZVVybCh0aGlzLnJvdXRlci51cmwpO1xuICAgIC8vICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMub3B0aW9ucy5vcHRpb25zPy5maW5kSW5kZXgoZWwgPT4gZWwucm91dGVyTGluayA9PSBjdXJyZW50Um91dGUpIHx8IDA7IC8vIGFzc3VtZSB0aGF0IHRoZSBmaXJzdCBpdGVtIG9mIHRoZSBtZW51IGlzIEhvbWVcbiAgICAvLyB9IGNhdGNoIChlKSB7XG4gICAgLy8gICBjb25zb2xlLmVycm9yKGUpO1xuICAgIC8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgIC8vIH1cbiAgfVxuXG5cbiAgLy8gcHJpdmF0ZSBnZXRNb2R1bGVVcmwoaW5wdXRTdHJpbmcpIHtcbiAgLy8gICBjb25zdCBmaXJzdFNsYXNoSW5kZXggPSBpbnB1dFN0cmluZy5pbmRleE9mKCcvJyk7XG4gIC8vICAgaWYgKGZpcnN0U2xhc2hJbmRleCA9PT0gLTEpIHtcbiAgLy8gICAgIHJldHVybiAnJztcbiAgLy8gICB9XG4gIC8vICAgY29uc3Qgc2Vjb25kU2xhc2hJbmRleCA9IGlucHV0U3RyaW5nLmluZGV4T2YoJy8nLCBmaXJzdFNsYXNoSW5kZXggKyAxKTtcbiAgLy8gICBpZiAoc2Vjb25kU2xhc2hJbmRleCA9PT0gLTEpIHtcbiAgLy8gICAgIHJldHVybiBpbnB1dFN0cmluZy5zdWJzdHJpbmcoZmlyc3RTbGFzaEluZGV4ICsgMSk7IC8vIEV4dHJhY3QgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3Qgc2xhc2hcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgcmV0dXJuIGlucHV0U3RyaW5nLnN1YnN0cmluZyhmaXJzdFNsYXNoSW5kZXggKyAxLCBzZWNvbmRTbGFzaEluZGV4KTsgLy8gRXh0cmFjdCB0aGUgc3Vic3RyaW5nIGJldHdlZW4gdGhlIHNsYXNoZXNcbiAgLy8gICB9XG4gIC8vIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm1lbnUtd3JhcHBlclwiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImJhY2tncm91bmRDb2xvclwiIFtzdHlsZS53aWR0aF09XCJleHBhbmRlZCA/ICcxMDBweCcgOiAnNTBweCdcIj5cbiAgPG1hdC10b29sYmFyIGNvbG9yPXByaW1hcnk+XG4gICAgPG1hdC10b29sYmFyLXJvdyBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIiBbc3R5bGUucGFkZGluZ109XCInMCAwIDAgMCdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGFyaWEtbGFiZWw9XCJNZW51XCIgKGNsaWNrKT1cInRvZ2dsZVNpemUoKVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L21hdC10b29sYmFyLXJvdz5cbiAgPC9tYXQtdG9vbGJhcj5cblxuICA8ZGl2IGNsYXNzPVwidmVydGljYWwtc3BhY2VyXCI+PC9kaXY+XG5cbiAgQGZvciAoaXRlbSBvZiBvcHRpb25zLm9wdGlvbnM7IHRyYWNrIGl0ZW07IGxldCBpID0gJGluZGV4KSB7XG4gICAgPGRpdiBjbGFzcz1cIm9wdGlvbi13cmFwcGVyXCJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImkgPT09IHNlbGVjdGVkT3B0aW9uID8gY29udHJhc3RDb2xvciA6IGJhY2tncm91bmRDb2xvciBcIlxuICAgICAgW3N0eWxlLmNvbG9yXT1cImkgPT09IHNlbGVjdGVkT3B0aW9uID8gIGJhY2tncm91bmRDb2xvciA6IGNvbnRyYXN0Q29sb3JcIlxuICAgICAgKGNsaWNrKT1cInNlbGVjdChpKVwiXG4gICAgICBtYXRUb29sdGlwPVwie3tpdGVtLmxhYmVsfX1cIlxuICAgICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwiYWZ0ZXJcIlxuICAgICAgW21hdFRvb2x0aXBEaXNhYmxlZF09XCJleHBhbmRlZFwiXG4gICAgICBbcm91dGVyTGlua109XCJpdGVtLnJvdXRlckxpbmtcIlxuICAgICAgPlxuICAgICAgPG1hdC1pY29uIFtjbGFzc109XCJleHBhbmRlZD8gJ3NjYWxlZC1pY29uJyA6ICdzbWFsbC1pY29uJ1wiIHN2Z0ljb249XCJ7e2l0ZW0uaWNvbk5hbWV9fVwiPlxuICAgICAgPC9tYXQtaWNvbj5cbiAgICAgIDxicj5cbiAgICAgICAgQGlmIChleHBhbmRlZCkge1xuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1sYWJlbC1sYXJnZVwiPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gIDwvZGl2PlxuIl19