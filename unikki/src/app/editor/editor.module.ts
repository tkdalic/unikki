import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EditorRoutingModule } from "./editor-routing.module";
import { IndexComponent } from "./index/index.component";

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, EditorRoutingModule]
})
export class EditorModule {}
