import { TestBed } from "@angular/core/testing";

import { LoadingService } from "./loading.service";

describe("LoadingService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: LoadingService = TestBed.inject(LoadingService);
    expect(service).toBeTruthy();
  });

  it("should show", () => {
    const service: LoadingService = TestBed.inject(LoadingService);
    service.show();
    expect(service.isDisplay).toBeTruthy();
  });

  it("should hide", () => {
    const service: LoadingService = TestBed.inject(LoadingService);
    service.hide();
    expect(service.isDisplay).toBeFalsy();
  });

  it("should toggle", () => {
    const service: LoadingService = TestBed.inject(LoadingService);
    service.hide();
    service.toggle();
    expect(service.isDisplay).toBeTruthy();
    service.toggle();
    expect(service.isDisplay).toBeFalsy();
  });
});
