import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../../resource-model/task";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  @Input() public tasks: Task[] = [];
  @Output() public tasksChange = new EventEmitter<Task[]>();
  firstTask: Task = { text: "", check: false };

  constructor() {}

  ngOnInit() {}

  addTask() {
    this.tasks.unshift({ ...this.firstTask });
    this.firstTask = { text: "", check: false };
    this.tasksChange.emit(this.tasks);
  }

  onEnter(index: number) {
    this.tasks.splice(index + 1, 0, { text: "", check: false });
    this.tasksChange.emit(this.tasks);
  }

  onDelete(index: number) {
    this.tasks.splice(index, 1);
    this.tasksChange.emit(this.tasks);
  }
}
