import { Component, Input } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/toolbar";
import * as i4 from "@angular/material/tooltip";
import * as i5 from "@angular/common";
export class NavMenuComponent {
    constructor() {
        this.backgroundColor = "#646064";
        this.contrastColor = "white";
        this.options = { options: [] };
        this.expanded = true;
        this.selectedOption = 0;
    }
    ngOnInit() {
    }
    toggleSize() {
        this.expanded = !this.expanded;
    }
    select(i) {
        this.selectedOption = i;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: NavMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.9", type: NavMenuComponent, isStandalone: true, selector: "common-nav-menu", inputs: { backgroundColor: "backgroundColor", contrastColor: "contrastColor", options: "options" }, ngImport: i0, template: "<div class=\"menu-wrapper\" [style.background-color]=\"backgroundColor\" [style.width]=\"expanded ? '100px' : '50px'\">\n  <mat-toolbar color=primary>\n    <mat-toolbar-row [style.background-color]=\"backgroundColor\" [style.padding]=\"'0 0 0 0'\">\n      <div class=\"menu-button-wrapper\">\n        <button mat-icon-button aria-label=\"Menu\" (click)=\"toggleSize()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <div class=\"vertical-spacer\"></div>\n\n  <div class=\"option-wrapper\"\n       *ngFor=\"let item of options.options; let i = index\"\n       [style.background-color]=\"i === selectedOption ? contrastColor : backgroundColor \"\n       [style.color]=\"i === selectedOption ?  backgroundColor : contrastColor\"\n       (click)=\"select(i)\"\n       matTooltip=\"{{item.label}}\"\n       matTooltipPosition=\"after\"\n       [matTooltipDisabled]=\"expanded\"\n       [routerLink]=\"item.routerLink\"\n  >\n    <mat-icon [class]=\"expanded? 'scaled-icon' : 'small-icon'\" svgIcon=\"{{item.iconName}}\">\n    </mat-icon>\n    <br>\n    <span *ngIf=\"expanded\" class=\"icon-label-large\">{{item.label}}</span>\n  </div>\n</div>\n", styles: [".menu-wrapper{color:#fff;margin:0;height:100%;justify-content:center;align-content:center;text-align:center}.option-wrapper{margin:8px 0;cursor:pointer}.vertical-spacer{height:16px}.scaled-icon,.small-icon{font-size:32px;width:32px;height:32px}.icon-label-large{font-size:14px}.menu-button-wrapper{width:100%;padding:0}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i3.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i3.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i4.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: MatMenuModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: NavMenuComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, imports: [
                        MatButtonModule,
                        MatIconModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        CommonModule,
                        RouterLink,
                        MatMenuModule
                    ], selector: 'common-nav-menu', template: "<div class=\"menu-wrapper\" [style.background-color]=\"backgroundColor\" [style.width]=\"expanded ? '100px' : '50px'\">\n  <mat-toolbar color=primary>\n    <mat-toolbar-row [style.background-color]=\"backgroundColor\" [style.padding]=\"'0 0 0 0'\">\n      <div class=\"menu-button-wrapper\">\n        <button mat-icon-button aria-label=\"Menu\" (click)=\"toggleSize()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <div class=\"vertical-spacer\"></div>\n\n  <div class=\"option-wrapper\"\n       *ngFor=\"let item of options.options; let i = index\"\n       [style.background-color]=\"i === selectedOption ? contrastColor : backgroundColor \"\n       [style.color]=\"i === selectedOption ?  backgroundColor : contrastColor\"\n       (click)=\"select(i)\"\n       matTooltip=\"{{item.label}}\"\n       matTooltipPosition=\"after\"\n       [matTooltipDisabled]=\"expanded\"\n       [routerLink]=\"item.routerLink\"\n  >\n    <mat-icon [class]=\"expanded? 'scaled-icon' : 'small-icon'\" svgIcon=\"{{item.iconName}}\">\n    </mat-icon>\n    <br>\n    <span *ngIf=\"expanded\" class=\"icon-label-large\">{{item.label}}</span>\n  </div>\n</div>\n", styles: [".menu-wrapper{color:#fff;margin:0;height:100%;justify-content:center;align-content:center;text-align:center}.option-wrapper{margin:8px 0;cursor:pointer}.vertical-spacer{height:16px}.scaled-icon,.small-icon{font-size:32px;width:32px;height:32px}.icon-label-large{font-size:14px}.menu-button-wrapper{width:100%;padding:0}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { backgroundColor: [{
                type: Input
            }], contrastColor: [{
                type: Input
            }], options: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItY29tbW9uLXVpL3NyYy9saWIvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQWlCckQsTUFBTSxPQUFPLGdCQUFnQjtJQU8zQjtRQU5TLG9CQUFlLEdBQVcsU0FBUyxDQUFDO1FBQ3BDLGtCQUFhLEdBQVcsT0FBTyxDQUFDO1FBQ2hDLFlBQU8sR0FBaUIsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUM7UUFDL0MsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixtQkFBYyxHQUFHLENBQUMsQ0FBQztJQUVILENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFNO1FBQ1gsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs4R0FsQlUsZ0JBQWdCO2tHQUFoQixnQkFBZ0IsK0tDekI3QiwrckNBNkJBLDBYRGhCUSxlQUFlLDJMQUNmLGFBQWEsbUxBQ2IsZ0JBQWdCLHlQQUNoQixnQkFBZ0IsOEhBQ2hCLFlBQVksZ1FBQ1osVUFBVSwyTkFDVixhQUFhOzsyRkFNUixnQkFBZ0I7a0JBZjVCLFNBQVM7aUNBQ0ksSUFBSSxXQUNMO3dCQUNMLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsWUFBWTt3QkFDWixVQUFVO3dCQUNWLGFBQWE7cUJBQ2hCLFlBQ08saUJBQWlCOzBFQUtsQixlQUFlO3NCQUF2QixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPcHRpb25Db25maWd9IGZyb20gXCIuL29wdGlvbi5jb25maWdcIjtcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uXCI7XG5pbXBvcnQge01hdFRvb2xiYXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyXCI7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pY29uXCI7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwXCI7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtSb3V0ZXJMaW5rfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9tZW51XCI7XG5cbkBDb21wb25lbnQoe1xuICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgICAgICBNYXRJY29uTW9kdWxlLFxuICAgICAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgICAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJvdXRlckxpbmssXG4gICAgICAgIE1hdE1lbnVNb2R1bGVcbiAgICBdLFxuICBzZWxlY3RvcjogJ2NvbW1vbi1uYXYtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdi1tZW51LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSBcIiM2NDYwNjRcIjtcbiAgQElucHV0KCkgY29udHJhc3RDb2xvcjogc3RyaW5nID0gXCJ3aGl0ZVwiO1xuICBASW5wdXQoKSBvcHRpb25zOiBPcHRpb25Db25maWcgPSB7b3B0aW9uczogW119O1xuICBleHBhbmRlZDogYm9vbGVhbiA9IHRydWU7XG4gIHNlbGVjdGVkT3B0aW9uID0gMDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgdG9nZ2xlU2l6ZSgpIHtcbiAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG4gIH1cblxuICBzZWxlY3QoaTogYW55KSB7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IGk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJtZW51LXdyYXBwZXJcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIiBbc3R5bGUud2lkdGhdPVwiZXhwYW5kZWQgPyAnMTAwcHgnIDogJzUwcHgnXCI+XG4gIDxtYXQtdG9vbGJhciBjb2xvcj1wcmltYXJ5PlxuICAgIDxtYXQtdG9vbGJhci1yb3cgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCIgW3N0eWxlLnBhZGRpbmddPVwiJzAgMCAwIDAnXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVudS1idXR0b24td3JhcHBlclwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBhcmlhLWxhYmVsPVwiTWVudVwiIChjbGljayk9XCJ0b2dnbGVTaXplKClcIj5cbiAgICAgICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYXQtdG9vbGJhci1yb3c+XG4gIDwvbWF0LXRvb2xiYXI+XG5cbiAgPGRpdiBjbGFzcz1cInZlcnRpY2FsLXNwYWNlclwiPjwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJvcHRpb24td3JhcHBlclwiXG4gICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygb3B0aW9ucy5vcHRpb25zOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJpID09PSBzZWxlY3RlZE9wdGlvbiA/IGNvbnRyYXN0Q29sb3IgOiBiYWNrZ3JvdW5kQ29sb3IgXCJcbiAgICAgICBbc3R5bGUuY29sb3JdPVwiaSA9PT0gc2VsZWN0ZWRPcHRpb24gPyAgYmFja2dyb3VuZENvbG9yIDogY29udHJhc3RDb2xvclwiXG4gICAgICAgKGNsaWNrKT1cInNlbGVjdChpKVwiXG4gICAgICAgbWF0VG9vbHRpcD1cInt7aXRlbS5sYWJlbH19XCJcbiAgICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJhZnRlclwiXG4gICAgICAgW21hdFRvb2x0aXBEaXNhYmxlZF09XCJleHBhbmRlZFwiXG4gICAgICAgW3JvdXRlckxpbmtdPVwiaXRlbS5yb3V0ZXJMaW5rXCJcbiAgPlxuICAgIDxtYXQtaWNvbiBbY2xhc3NdPVwiZXhwYW5kZWQ/ICdzY2FsZWQtaWNvbicgOiAnc21hbGwtaWNvbidcIiBzdmdJY29uPVwie3tpdGVtLmljb25OYW1lfX1cIj5cbiAgICA8L21hdC1pY29uPlxuICAgIDxicj5cbiAgICA8c3BhbiAqbmdJZj1cImV4cGFuZGVkXCIgY2xhc3M9XCJpY29uLWxhYmVsLWxhcmdlXCI+e3tpdGVtLmxhYmVsfX08L3NwYW4+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=