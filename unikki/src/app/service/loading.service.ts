import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoadingService {
  private isDisplayFlg = false;
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
