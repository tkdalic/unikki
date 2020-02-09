import { Component, OnInit } from "@angular/core";
import { DiaryService } from "src/app/service/diary.service";
import { StorageService } from "src/app/service/storage.service";
import { Diary } from "src/app/resource-model/diary";
import { GapiService } from "src/app/service/gapi.service";
import { FileService } from "src/app/service/file.service";

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
    private storageService: StorageService,
    private gapiService: GapiService,
    private fileService: FileService
  ) {}

  ngOnInit() {
    this.loadDiary();
    this.getUnikkiFile();
  }

  saveDiary(): void {
    this.storageService.set(
      this.storageKey,
      this.diaryService.toString(this.diary)
    );
  }

  async getUnikkiFile() {
    const authResult = await this.gapiService.auth();
    if (!authResult || authResult.error) {
      window.alert("access was not sucess");
      return;
    }
    await gapi.client.load("drive", "v3");
    const directory = await this.gapiService.getOrCreateDirectory();
    if (directory === null) {
      window.alert("I can't make directory");
    }
    const unikkiFile = await this.gapiService.getUnikkiFile(
      directory,
      "20200205.md"
    );
  }

  loadDiary(): void {
    const storageValue = this.storageService.get(this.storageKey);
    if (storageValue) {
      this.diary = this.diaryService.parse(storageValue);
    }
  }
}
