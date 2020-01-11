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

  keydownCode = 0;

  readonly ENTER_CODE = 13;
  readonly BACK_SPACE_CODE = 8;

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

  onKeydown(event: KeyboardEvent) {
    this.keydownCode = event.keyCode;
  }

  onKeyup(event: KeyboardEvent) {
    const keyupCode = event.keyCode;
    console.log(this.keydownCode, keyupCode);

    if (keyupCode === this.ENTER_CODE && this.keydownCode === this.ENTER_CODE) {
      this.onEnter();
    } else if (keyupCode === this.BACK_SPACE_CODE) {
      this.onDelete();
    }
  }
}
