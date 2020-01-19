import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout/layout.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  exports: [HeaderComponent, LayoutComponent],
  imports: [CommonModule]
})
export class SharedModule {}
