import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout/layout.component";
import { HeaderComponent } from "./header/header.component";
import { OverlayComponent } from "./overlay/overlay.component";

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, OverlayComponent],
  exports: [HeaderComponent, LayoutComponent, OverlayComponent],
  imports: [CommonModule]
})
export class SharedModule {}
