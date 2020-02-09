import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class OverlayService {
  private _isDisplay = false;
  constructor() {}

  get isDisplay(): boolean {
    return this._isDisplay;
  }
  show() {
    this._isDisplay = true;
  }

  hide() {
    this._isDisplay = false;
  }

  toggle() {
    this._isDisplay = !this.isDisplay;
  }
}
