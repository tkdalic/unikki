import { Component, OnInit } from "@angular/core";
import { SidebarService } from "src/app/service/sidebar.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  constructor(public sidebarService: SidebarService) {}

  ngOnInit() {}
}
