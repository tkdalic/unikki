import {
  Directive,
  ContentChildren,
  QueryList,
  AfterContentChecked
} from "@angular/core";
import { TodoComponent } from "../../todo/todo.component";
import { nextTick } from "q";

@Directive({
  selector: "[appTodoFocus]"
})
export class TodoFocusDirective implements AfterContentChecked {
  @ContentChildren(TodoComponent) focusChildren: QueryList<TodoComponent>;
  focusIndex: number = null;
  shouldFocus = false;
  constructor() {}

  ngAfterContentChecked() {
    const todoList = this.focusChildren.toArray();
    if (this.shouldFocus) {
      nextTick(() => todoList[this.focusIndex + 1].focusText());
      this.shouldFocus = false;
    }
    todoList.forEach((todo, index) => {
      todo.enterChange.subscribe(() => {
        this.focusIndex = index;
        this.shouldFocus = true;
      });
    });
  }
}
