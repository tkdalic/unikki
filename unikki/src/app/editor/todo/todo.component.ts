import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  @Input() text = "";
  @Output() enterChange = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onEnter() {
    this.enterChange.emit();
  }
}
