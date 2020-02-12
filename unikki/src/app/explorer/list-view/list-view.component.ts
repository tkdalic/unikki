import { Component, OnInit, Input } from "@angular/core";
import { FileItem } from "src/app/resource-model/fileItem";

@Component({
  selector: "app-list-view",
  templateUrl: "./list-view.component.html",
  styleUrls: ["./list-view.component.scss"]
})
export class ListViewComponent implements OnInit {
  @Input() items: Array<FileItem> = [];
  constructor() {}

  ngOnInit(): void {}

  trackItem(index: number, item: FileItem): string {
    return item.id;
  }
}
