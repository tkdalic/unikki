import { Component, OnInit } from "@angular/core";
import { GapiService } from "src/app/service/gapi.service";

@Component({
  selector: "app-explorer",
  templateUrl: "./explorer.component.html",
  styleUrls: ["./explorer.component.scss"]
})
export class ExplorerComponent implements OnInit {
  constructor(public gapiService: GapiService) {}

  ngOnInit(): void {}
}
