import { TestBed } from "@angular/core/testing";

import { SidebarService } from "./sidebar.service";

describe("SidebarService", () => {
  let service: SidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should show", () => {
    service.show();
    expect(service.isDisplay).toBeTruthy();
  });

  it("should hide", () => {
    service.hide();
    expect(service.isDisplay).toBeFalsy();
  });

  it("should toggle", () => {
    service.hide();
    service.toggle();
    expect(service.isDisplay).toBeTruthy();
    service.toggle();
    expect(service.isDisplay).toBeFalsy();
  });
});
