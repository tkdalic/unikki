import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FileItem } from "src/app/resource-model/fileItem";

@Component({
  selector: "app-list-view",
  templateUrl: "./list-view.component.html",
  styleUrls: ["./list-view.component.scss"]
})
export class ListViewComponent implements OnInit {
  @Input() items: Array<FileItem> = [];
  @Input() selectId = "";
  @Output() clickItem = new EventEmitter<FileItem>();
  constructor() {}

  ngOnInit(): void {}

  trackItem(index: number, item: FileItem): string {
    return item.id;
  }

  onClickItem(item: FileItem) {
    this.clickItem.emit(item);
  }
}
