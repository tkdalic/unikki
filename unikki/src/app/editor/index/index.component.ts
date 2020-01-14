import { Component, OnInit } from "@angular/core";
import { Task } from "src/app/resource-model/task";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  tasks: Task[] = [{ text: "test", check: false }];
  markdown = "hoge";
  editorOptions = {
    previewStyle: "tab"
  };
  constructor() {}

  ngOnInit() {}
}
