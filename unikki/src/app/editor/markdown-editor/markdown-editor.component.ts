import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import Editor from "tui-editor";

@Component({
  selector: "app-markdown-editor",
  templateUrl: "./markdown-editor.component.html",
  styleUrls: ["./markdown-editor.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class MarkdownEditorComponent implements OnInit {
  @ViewChild("markdownEditor", { static: true }) markdownEditor: ElementRef;
  @Output() markdownChange = new EventEmitter<string>();

  private editor: Editor;
  private _markdown: string;

  constructor() {}

  ngOnInit() {
    this.editor = new Editor({
      el: this.markdownEditor.nativeElement,
      initialValue: this._markdown,
      previewStyle: "tab"
    });
    this.editor.addHook("change", () =>
      this.onChangeMarkdown(this.editor.getMarkdown())
    );
  }

  @Input() set markdown(markdown: string) {
    this._markdown = markdown;

    if (this.editor) {
      this.editor.setMarkdown(markdown);
      this.markdownChange.emit(markdown);
    }
  }

  onChangeMarkdown(markdown: string) {
    this.markdownChange.emit(markdown);
  }
}
