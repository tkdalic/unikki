import { Component, OnInit, HostListener } from "@angular/core";
import { SidebarService } from "src/app/service/sidebar.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  sidebarMode = "";
  constructor(public sidebarService: SidebarService) {}

  ngOnInit() {}

  @HostListener("window:resize")
  onResize() {
    this.sidebarMode = window.innerWidth > 700 ? "side" : "over";
  }
}
