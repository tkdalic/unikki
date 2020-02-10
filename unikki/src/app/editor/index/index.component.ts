import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { DiaryService } from "src/app/service/diary.service";
import { StorageService } from "src/app/service/storage.service";
import { Diary } from "src/app/resource-model/diary";
import { GapiService } from "src/app/service/gapi.service";
import { FileService } from "src/app/service/file.service";
import { LoadingService } from "src/app/service/loading.service";

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

  title = "";
  fileId = "";
  isAuth = false;
  editorOptions = {
    previewStyle: "tab"
  };

  private readonly storageKey = "unikki";
  constructor(
    private diaryService: DiaryService,
    private storageService: StorageService,
    private gapiService: GapiService,
    private fileService: FileService,
    private loadingService: LoadingService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.title = this.diaryService.makeTitle();
    this.loadingService.show();
    this.loadDiary();
  }

  ngOnInit() {
    this.getUnikkiFile().then(() => {
      this.isAuth = true;
      this.loadingService.hide();
    });
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
      this.title
    );

    if (!unikkiFile) {
      return;
    }
    this.fileId = unikkiFile.id;
    const contents = await this.gapiService.getFileContents(unikkiFile.id);
    if (!contents) {
      return;
    }

    this.diary = this.diaryService.parse(contents);
  }

  async updateUnikkiFile() {
    const markdownFile = {
      title: this.title,
      contents: this.diaryService.toString(this.diary)
    };

    this.loadingService.show();
    const response = await this.gapiService.updateFile(
      this.fileId,
      this.fileService.make(markdownFile)
    );
    this.loadingService.hide();

    if (response) {
      window.alert("success!");
    }
  }

  loadDiary(): void {
    const storageValue = this.storageService.get(this.storageKey);
    if (storageValue) {
      this.diary = this.diaryService.parse(storageValue);
    }
  }
}
