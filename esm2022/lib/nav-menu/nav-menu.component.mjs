import { Component, Input } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NavigationEnd, RouterLink } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu";
import { filter, take } from "rxjs";
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
        this.currentOption = 0;
        this.expanded = true;
        this.selectedOption = 0;
    }
    toggleSize() {
        this.expanded = !this.expanded;
    }
    select(i) {
        this.selectedOption = i;
    }
    ngOnChanges(changes) {
        // if(changes['currentOption'].currentValue){
        //   this.selectedOption = this.currentOption;
        // }
    }
    setNavMenuInitialRoute() {
        this.router.events.pipe(filter(e => e instanceof NavigationEnd), take(1)).subscribe(event => {
            if (event?.['url']) {
                const route = this.extractPath(event?.['url']);
                const index = this.options.options.findIndex(option => option.routerLink == route);
                if (index >= 0) {
                    this.selectedOption = index;
                }
            }
        });
    }
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
    ngOnInit() {
        this.setNavMenuInitialRoute();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NavMenuComponent, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0", type: NavMenuComponent, isStandalone: true, selector: "common-nav-menu", inputs: { backgroundColor: "backgroundColor", contrastColor: "contrastColor", options: "options", currentOption: "currentOption" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"menu-wrapper\" [style.background-color]=\"backgroundColor\" [style.width]=\"expanded ? '100px' : '50px'\">\n  <mat-toolbar color=primary>\n    <mat-toolbar-row [style.background-color]=\"backgroundColor\" [style.padding]=\"'0 0 0 0'\">\n      <div class=\"menu-button-wrapper\">\n        <button mat-icon-button aria-label=\"Menu\" (click)=\"toggleSize()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <div class=\"vertical-spacer\"></div>\n\n  @for (item of options.options; track item; let i = $index) {\n    <div class=\"option-wrapper\"\n      [style.background-color]=\"i === selectedOption ? contrastColor : backgroundColor \"\n      [style.color]=\"i === selectedOption ?  backgroundColor : contrastColor\"\n      (click)=\"select(i)\"\n      matTooltip=\"{{item.label}}\"\n      matTooltipPosition=\"after\"\n      [matTooltipDisabled]=\"expanded\"\n      [routerLink]=\"item.routerLink\"\n      >\n      <mat-icon [class]=\"expanded? 'scaled-icon' : 'small-icon'\" svgIcon=\"{{item.iconName}}\">\n      </mat-icon>\n      <br>\n        @if (expanded) {\n          <span class=\"icon-label-large\">{{item.label}}</span>\n        }\n      </div>\n    }\n  </div>\n", styles: [".menu-wrapper{color:#fff;margin:0;height:100%;text-align:center}.option-wrapper{margin:8px 0;cursor:pointer}.vertical-spacer{height:16px}.scaled-icon,.small-icon{font-size:32px;width:32px;height:32px}.icon-label-large{font-size:14px}.menu-button-wrapper{width:100%;padding:0}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i4.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i4.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i5.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: MatMenuModule }] }); }
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
            }], currentOption: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFM0QsT0FBTyxFQUFpQixhQUFhLEVBQVUsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDbEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0FBaUJsQyxNQUFNLE9BQU8sZ0JBQWdCO0lBUzNCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUnpCLG9CQUFlLEdBQVcsU0FBUyxDQUFDO1FBQ3BDLGtCQUFhLEdBQVcsT0FBTyxDQUFDO1FBQ2hDLFlBQU8sR0FBaUIsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUM7UUFDdEMsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFFbkMsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixtQkFBYyxHQUFHLENBQUMsQ0FBQztJQUVtQixDQUFDO0lBRXZDLFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQVM7UUFDZCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLDZDQUE2QztRQUM3Qyw4Q0FBOEM7UUFDOUMsSUFBSTtJQUNOLENBQUM7SUFFTyxzQkFBc0I7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksYUFBYSxDQUFDLEVBQ3ZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQixJQUFHLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7Z0JBQ2pCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQztnQkFDbEYsSUFBRyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUE7Z0JBQzdCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRU8sV0FBVyxDQUFDLFdBQVc7UUFDN0IsTUFBTSxlQUFlLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqRCxJQUFJLGVBQWUsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzNCLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUVELE1BQU0sZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXZFLElBQUksZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1QixPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxXQUFXLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RSxDQUFDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzhHQTFEVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQixvT0MxQjdCLDJ1Q0FnQ0EsOFVEakJJLGVBQWUsMklBQ2YsYUFBYSxtTEFDYixnQkFBZ0IseVBBQ2hCLGdCQUFnQiw2VEFDaEIsVUFBVSxtT0FDVixhQUFhOzsyRkFNSixnQkFBZ0I7a0JBZDVCLFNBQVM7aUNBQ0ksSUFBSSxXQUNMO3dCQUNULGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixhQUFhO3FCQUNoQixZQUNXLGlCQUFpQjsyRUFLbEIsZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09wdGlvbkNvbmZpZ30gZnJvbSBcIi4vb3B0aW9uLmNvbmZpZ1wiO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9idXR0b25cIjtcbmltcG9ydCB7TWF0VG9vbGJhck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXJcIjtcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXBcIjtcblxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCwgUm91dGVyLCBSb3V0ZXJMaW5rfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9tZW51XCI7XG5pbXBvcnQge2ZpbHRlciwgdGFrZX0gZnJvbSBcInJ4anNcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIFJvdXRlckxpbmssXG4gICAgTWF0TWVudU1vZHVsZVxuXSxcbiAgc2VsZWN0b3I6ICdjb21tb24tbmF2LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtbWVudS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0e1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9IFwiIzY0NjA2NFwiO1xuICBASW5wdXQoKSBjb250cmFzdENvbG9yOiBzdHJpbmcgPSBcIndoaXRlXCI7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IE9wdGlvbkNvbmZpZyA9IHtvcHRpb25zOiBbXX07XG4gIEBJbnB1dCgpIGN1cnJlbnRPcHRpb246IG51bWJlciA9IDA7XG5cbiAgZXhwYW5kZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBzZWxlY3RlZE9wdGlvbiA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgdG9nZ2xlU2l6ZSgpIHtcbiAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG4gIH1cblxuICBzZWxlY3QoaTogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IGk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgLy8gaWYoY2hhbmdlc1snY3VycmVudE9wdGlvbiddLmN1cnJlbnRWYWx1ZSl7XG4gICAgLy8gICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5jdXJyZW50T3B0aW9uO1xuICAgIC8vIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0TmF2TWVudUluaXRpYWxSb3V0ZSgpe1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICAgdGFrZSgxKSxcbiAgICApLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBpZihldmVudD8uWyd1cmwnXSl7XG4gICAgICAgIGNvbnN0IHJvdXRlID0gdGhpcy5leHRyYWN0UGF0aChldmVudD8uWyd1cmwnXSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vcHRpb25zLm9wdGlvbnMuZmluZEluZGV4KG9wdGlvbj0+IG9wdGlvbi5yb3V0ZXJMaW5rID09IHJvdXRlKTtcbiAgICAgICAgaWYoaW5kZXggPj0gMCApe1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBpbmRleFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFBhdGgoaW5wdXRTdHJpbmcpIHtcbiAgICBjb25zdCBmaXJzdFNsYXNoSW5kZXggPSBpbnB1dFN0cmluZy5pbmRleE9mKCcvJyk7XG5cbiAgICBpZiAoZmlyc3RTbGFzaEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY29uZFNsYXNoSW5kZXggPSBpbnB1dFN0cmluZy5pbmRleE9mKCcvJywgZmlyc3RTbGFzaEluZGV4ICsgMSk7XG5cbiAgICBpZiAoc2Vjb25kU2xhc2hJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBpbnB1dFN0cmluZy5zdWJzdHJpbmcoZmlyc3RTbGFzaEluZGV4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpbnB1dFN0cmluZy5zdWJzdHJpbmcoZmlyc3RTbGFzaEluZGV4ICsgMSwgc2Vjb25kU2xhc2hJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXROYXZNZW51SW5pdGlhbFJvdXRlKCk7XG4gIH1cblxuXG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtZW51LXdyYXBwZXJcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIiBbc3R5bGUud2lkdGhdPVwiZXhwYW5kZWQgPyAnMTAwcHgnIDogJzUwcHgnXCI+XG4gIDxtYXQtdG9vbGJhciBjb2xvcj1wcmltYXJ5PlxuICAgIDxtYXQtdG9vbGJhci1yb3cgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCIgW3N0eWxlLnBhZGRpbmddPVwiJzAgMCAwIDAnXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVudS1idXR0b24td3JhcHBlclwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBhcmlhLWxhYmVsPVwiTWVudVwiIChjbGljayk9XCJ0b2dnbGVTaXplKClcIj5cbiAgICAgICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYXQtdG9vbGJhci1yb3c+XG4gIDwvbWF0LXRvb2xiYXI+XG5cbiAgPGRpdiBjbGFzcz1cInZlcnRpY2FsLXNwYWNlclwiPjwvZGl2PlxuXG4gIEBmb3IgKGl0ZW0gb2Ygb3B0aW9ucy5vcHRpb25zOyB0cmFjayBpdGVtOyBsZXQgaSA9ICRpbmRleCkge1xuICAgIDxkaXYgY2xhc3M9XCJvcHRpb24td3JhcHBlclwiXG4gICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJpID09PSBzZWxlY3RlZE9wdGlvbiA/IGNvbnRyYXN0Q29sb3IgOiBiYWNrZ3JvdW5kQ29sb3IgXCJcbiAgICAgIFtzdHlsZS5jb2xvcl09XCJpID09PSBzZWxlY3RlZE9wdGlvbiA/ICBiYWNrZ3JvdW5kQ29sb3IgOiBjb250cmFzdENvbG9yXCJcbiAgICAgIChjbGljayk9XCJzZWxlY3QoaSlcIlxuICAgICAgbWF0VG9vbHRpcD1cInt7aXRlbS5sYWJlbH19XCJcbiAgICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cImFmdGVyXCJcbiAgICAgIFttYXRUb29sdGlwRGlzYWJsZWRdPVwiZXhwYW5kZWRcIlxuICAgICAgW3JvdXRlckxpbmtdPVwiaXRlbS5yb3V0ZXJMaW5rXCJcbiAgICAgID5cbiAgICAgIDxtYXQtaWNvbiBbY2xhc3NdPVwiZXhwYW5kZWQ/ICdzY2FsZWQtaWNvbicgOiAnc21hbGwtaWNvbidcIiBzdmdJY29uPVwie3tpdGVtLmljb25OYW1lfX1cIj5cbiAgICAgIDwvbWF0LWljb24+XG4gICAgICA8YnI+XG4gICAgICAgIEBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tbGFiZWwtbGFyZ2VcIj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgfVxuICA8L2Rpdj5cbiJdfQ==