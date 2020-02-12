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
