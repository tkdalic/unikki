import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExplorerRoutingModule } from "./explorer-routing.module";
import { ListViewComponent } from "./list-view/list-view.component";
import { ExplorerComponent } from "./explorer/explorer.component";

@NgModule({
  declarations: [ListViewComponent, ExplorerComponent],
  imports: [CommonModule, ExplorerRoutingModule],
  exports: [ExplorerComponent]
})
export class ExplorerModule {}
