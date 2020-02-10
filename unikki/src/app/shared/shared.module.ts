import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout/layout.component";
import { HeaderComponent } from "./header/header.component";
import { LoadingComponent } from "./loading/loading.component";

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, LoadingComponent],
  exports: [HeaderComponent, LayoutComponent, LoadingComponent],
  imports: [CommonModule]
})
export class SharedModule {}
