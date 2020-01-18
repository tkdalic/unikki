import { Component, OnInit } from "@angular/core";
import { DiaryService } from "src/app/service/diary.service";
import { StorageService } from "src/app/service/storage.service";
import { Diary } from "src/app/resource-model/diary";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  diary: Diary = {
    tasks: [],
    markdown: ""
  };
  editorOptions = {
    previewStyle: "tab"
  };

  private readonly storageKey = "unikki";
  constructor(
    private diaryService: DiaryService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.loadDiary();
  }

  saveDiary(): void {
    this.storageService.set(
      this.storageKey,
      this.diaryService.toString(this.diary)
    );
  }

  loadDiary(): void {
    const storageValue = this.storageService.get(this.storageKey);
    if (storageValue) {
      this.diary = this.diaryService.parse(storageValue);
    }
  }
}
