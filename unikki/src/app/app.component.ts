import { Component } from "@angular/core";
import { OverlayService } from "./service/overlay.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "unikki";
  constructor(public overlayService: OverlayService) {}
}
