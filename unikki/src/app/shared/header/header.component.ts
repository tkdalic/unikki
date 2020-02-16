import { Component, OnInit, Input } from "@angular/core";
import { SidebarService } from "src/app/service/sidebar.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() title = "";
  constructor(public sidebarService: SidebarService) {}

  ngOnInit() {}
}
