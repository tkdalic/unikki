import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  Input
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

  private editor: Editor;
  _markdown: string;
  constructor() {}

  ngOnInit() {
    this.editor = new Editor({
      el: this.markdownEditor.nativeElement,
      initialValue: this._markdown,
      previewStyle: "tab"
    });
  }

  @Input() set markdown(markdown: string) {
    this._markdown = markdown;

    if (this.editor) {
      this.editor.setMarkdown(markdown);
    }
  }

  get markdown(): string {
    if (this.editor) {
      return this.editor.getMarkdown();
    }
  }
}
