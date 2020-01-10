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
  constructor() {}

  ngOnInit() {
    new Editor({
      el: this.markdownEditor.nativeElement,
      previewStyle: "tab"
    });
  }
}
