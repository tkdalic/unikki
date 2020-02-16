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
  isAuth = false;
  isSyncing = false;
  editorOptions = {
    previewStyle: "tab"
  };

  private readonly storageKey = "unikki";
  constructor(
    public diaryService: DiaryService,
    private storageService: StorageService,
    public gapiService: GapiService,
    private fileService: FileService,
    private loadingService: LoadingService
  ) {
    this.loadingService.show();
    this.loadDiary();
  }

  ngOnInit() {
    this.getUnikkiFile().then(() => {
      this.isAuth = true;
      this.loadingService.hide();
    });
  }

  async saveDiary(): Promise<void> {
    await this.storageService.set(
      this.storageKey,
      this.diaryService.toString(this.diaryService.diary)
    );
  }

  async getUnikkiFile() {
    const authResult = await this.gapiService.auth();
    if (!authResult) {
      window.alert("access was not sucess");
      return;
    }
    await gapi.client.load("drive", "v3");
    const directory = await this.gapiService.getOrCreateDirectory();
    if (directory === null) {
      window.alert("I can't make directory");
    }
    this.gapiService.unikkiFiles = await this.gapiService.getUnikkiFiles(
      directory
    );
    const title = this.diaryService.makeTitle();
    const selectFile = this.gapiService.unikkiFiles.find(
      file => file.name === title
    );
    if (selectFile) {
      this.gapiService.selectUnikkiFile = selectFile;
    } else {
      this.gapiService.selectUnikkiFile = await this.gapiService.makeUnikkiFile(
        directory,
        title
      );
    }

    if (!this.gapiService.selectUnikkiFile) {
      return;
    }

    const contents = await this.gapiService.getFileContents(
      this.gapiService.selectUnikkiFile.id
    );
    if (!contents) {
      return;
    }

    this.diaryService.diary = this.diaryService.parse(contents);
  }

  async updateUnikkiFile() {
    this.isSyncing = true;
    const markdownFile = {
      title: this.gapiService.selectUnikkiFile.name,
      contents: this.diaryService.toString(this.diaryService.diary)
    };

    this.loadingService.show();
    const response = await this.gapiService.updateFile(
      this.gapiService.selectUnikkiFile.id,
      this.fileService.make(markdownFile)
    );
    this.loadingService.hide();

    if (response) {
      window.alert("success!");
      this.isSyncing = false;
    }
  }

  async loadDiary(): Promise<void> {
    const storageValue = await this.storageService.get(this.storageKey);
    if (storageValue) {
      this.diaryService.diary = this.diaryService.parse(storageValue);
    }
  }
}
