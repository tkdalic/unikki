import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EditorRoutingModule } from "./editor-routing.module";
import { IndexComponent } from "./index/index.component";
import { TuiModule } from "ngx-tui-editor";
import { MarkdownEditorComponent } from "./markdown-editor/markdown-editor.component";

@NgModule({
  declarations: [IndexComponent, MarkdownEditorComponent],
  imports: [CommonModule, EditorRoutingModule, TuiModule]
})
export class EditorModule {}
