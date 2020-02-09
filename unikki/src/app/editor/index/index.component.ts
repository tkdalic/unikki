import { Component, OnInit } from "@angular/core";
import { DiaryService } from "src/app/service/diary.service";
import { StorageService } from "src/app/service/storage.service";
import { Diary } from "src/app/resource-model/diary";
import { GapiService } from "src/app/service/gapi.service";

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
    private gapiService: GapiService
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

  getUnikkiFile() {
    this.gapiService
      .auth()
      .then(async authResult => {
        if (authResult && !authResult.error) {
          await gapi.client.load("drive", "v3");
          const directory = await this.gapiService.getOrCreateDirectory();
          if (directory === null) {
            window.alert("I can't make directory");
          }
          const unikkiFile = await this.gapiService.getUnikkiFile(
            directory,
            "20200205.md"
          );
          console.log(unikkiFile);
        } else {
          window.alert("Auth was not successful");
        }
      })
      .catch(error => window.alert(error));
  }

  loadDiary(): void {
    const storageValue = this.storageService.get(this.storageKey);
    if (storageValue) {
      this.diary = this.diaryService.parse(storageValue);
    }
  }
}
