import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { EditorRoutingModule } from "./editor-routing.module";
import { IndexComponent } from "./index/index.component";
import { MarkdownEditorComponent } from "./markdown-editor/markdown-editor.component";
import { TodoComponent } from "./todo/todo.component";
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [IndexComponent, MarkdownEditorComponent, TodoComponent, TodoListComponent],
  imports: [CommonModule, EditorRoutingModule, FormsModule]
})
export class EditorModule {}
