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
    const todoComponents = this.focusChildren.toArray();
    if (this.shouldFocus) {
      nextTick(() => todoComponents[this.focusIndex].focusText());
      this.shouldFocus = false;
    }
    todoComponents.forEach((todo, index) => {
      todo.enterChange.subscribe(() => {
        this.focusIndex = index + 1;
        this.shouldFocus = true;
      });
      todo.deleteChange.subscribe(() => {
        this.focusIndex = index - 1;
        this.shouldFocus = true;
      });
    });
  }
}