import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExplorerRoutingModule } from "./explorer-routing.module";
import { ListViewComponent } from "./list-view/list-view.component";

@NgModule({
  declarations: [ListViewComponent],
  imports: [CommonModule, ExplorerRoutingModule]
})
export class ExplorerModule {}
