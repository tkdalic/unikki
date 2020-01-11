import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  @Input() text = "";
  @Input() check = false;
  @Output() textChange = new EventEmitter<string>();
  @Output() checkChange = new EventEmitter<boolean>();
  @Output() enterChange = new EventEmitter<void>();
  @Output() deleteChange = new EventEmitter<void>();
  @ViewChild("textElement", { static: true }) textElement: ElementRef<
    HTMLElement
  >;
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

  onChangeText(text: string) {
    this.textChange.emit(text);
  }

  onChangeCheck(check: boolean) {
    this.checkChange.emit(check);
  }

  focusText() {
    console.log(this.text);

    this.textElement.nativeElement.focus();
  }
}
