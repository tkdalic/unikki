import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SidebarService {
  isDisplayFlg: boolean;
  constructor() {}

  get isDisplay(): boolean {
    return this.isDisplayFlg;
  }

  set isDisplay(value: boolean) {
    this.isDisplayFlg = value;
  }

  show() {
    this.isDisplayFlg = true;
  }

  hide() {
    this.isDisplayFlg = false;
  }

  toggle() {
    this.isDisplayFlg = !this.isDisplay;
  }
}
