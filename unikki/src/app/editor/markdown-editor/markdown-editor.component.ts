import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation
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
  constructor() {}

  ngOnInit() {
    this.editor = new Editor({
      el: this.markdownEditor.nativeElement,
      previewStyle: "tab"
    });
  }

  set markdown(markdown: string) {
    this.editor.setMarkdown(markdown);
  }

  get markdown(): string {
    return this.editor.getMarkdown();
  }
}
