import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { TodoListComponent } from "src/app/editor/todo-list/todo-list.component";
import { NgModule } from "@angular/core";
import { moduleMetadata } from "@storybook/angular";
import { TodoComponent } from "src/app/editor/todo/todo.component";
import { TodoFocusDirective } from "src/app/editor/directive/todo-focus/todo-focus.directive";

export default {
  title: "todo-list",
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [TodoComponent, TodoFocusDirective]
    })
  ]
};

export const todoList = () => ({
  component: TodoListComponent,
  props: {
    tasks: [
      { text: "hoge 1", check: false },
      { text: "hoge 2", check: true },
      { text: "hoge 3", check: false }
    ]
  }
});
