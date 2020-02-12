import { Component, OnInit } from "@angular/core";
import { GapiService } from "src/app/service/gapi.service";
import { DiaryService } from "src/app/service/diary.service";
import { LoadingService } from "src/app/service/loading.service";
import { SidebarService } from "src/app/service/sidebar.service";

@Component({
  selector: "app-explorer",
  templateUrl: "./explorer.component.html",
  styleUrls: ["./explorer.component.scss"]
})
export class ExplorerComponent implements OnInit {
  constructor(
    public gapiService: GapiService,
    private diaryService: DiaryService,
    private loadingService: LoadingService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {}

  async changeDiary(item: gapi.client.drive.File) {
    this.loadingService.show();
    this.gapiService.selectUnikkiFile = item;
    const contents = await this.gapiService.getFileContents(item.id);
    this.loadingService.hide();
    this.diaryService.diary = this.diaryService.parse(contents);
    this.sidebarService.hide();
  }
}
