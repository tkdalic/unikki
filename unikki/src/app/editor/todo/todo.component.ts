import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  @Input() text = "";
  @Input() check = false;
  @Output() enterChange = new EventEmitter<void>();
  @Output() deleteChange = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onEnter() {
    this.enterChange.emit();
  }

  onDelete() {
    if (this.text.length === 0) {
      this.deleteChange.emit();
    }
  }
}
