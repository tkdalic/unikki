import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { EditorRoutingModule } from "./editor-routing.module";
import { IndexComponent } from "./index/index.component";
import { MarkdownEditorComponent } from "./markdown-editor/markdown-editor.component";
import { TodoComponent } from "./todo/todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoFocusDirective } from "./directive/todo-focus/todo-focus.directive";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    IndexComponent,
    MarkdownEditorComponent,
    TodoComponent,
    TodoListComponent,
    TodoFocusDirective
  ],
  imports: [CommonModule, EditorRoutingModule, FormsModule, SharedModule]
})
export class EditorModule {}
