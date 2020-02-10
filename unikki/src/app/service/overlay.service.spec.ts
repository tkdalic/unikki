import { TestBed } from "@angular/core/testing";

import { OverlayService } from "./overlay.service";

describe("OverlayService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: OverlayService = TestBed.get(OverlayService);
    expect(service).toBeTruthy();
  });

  it("should show", () => {
    const service: OverlayService = TestBed.get(OverlayService);
    service.show();
    expect(service.isDisplay).toBeTruthy();
  });

  it("should hide", () => {
    const service: OverlayService = TestBed.get(OverlayService);
    service.hide();
    expect(service.isDisplay).toBeFalsy();
  });

  it("should toggle", () => {
    const service: OverlayService = TestBed.get(OverlayService);
    service.hide();
    service.toggle();
    expect(service.isDisplay).toBeTruthy();
    service.toggle();
    expect(service.isDisplay).toBeFalsy();
  });
});
