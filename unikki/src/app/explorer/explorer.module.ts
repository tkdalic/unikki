import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExplorerRoutingModule } from "./explorer-routing.module";
import { ListViewComponent } from "./list-view/list-view.component";
import { ExplorerComponent } from "./explorer/explorer.component";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [ListViewComponent, ExplorerComponent],
  imports: [CommonModule, ExplorerRoutingModule, MatListModule],
  exports: [ExplorerComponent]
})
export class ExplorerModule {}
