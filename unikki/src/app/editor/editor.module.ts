import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EditorRoutingModule } from "./editor-routing.module";
import { IndexComponent } from "./index/index.component";
import { TuiModule } from "ngx-tui-editor";

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, EditorRoutingModule, TuiModule]
})
export class EditorModule {}
