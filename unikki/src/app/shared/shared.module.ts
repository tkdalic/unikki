import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout/layout.component";
import { HeaderComponent } from "./header/header.component";
import { LoadingComponent } from "./loading/loading.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, LoadingComponent],
  exports: [HeaderComponent, LayoutComponent, LoadingComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class SharedModule {}
