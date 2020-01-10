import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../todo/task";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  @Input() public tasks: Task[] = [];

  constructor() {}

  ngOnInit() {}
}
