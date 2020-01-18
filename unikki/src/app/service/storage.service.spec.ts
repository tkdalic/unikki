import { TestBed } from "@angular/core/testing";

import { StorageService } from "./storage.service";

describe("StorageService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });

  it("should be save and load", () => {
    const service: StorageService = TestBed.get(StorageService);
    const key = "key";
    const value = "value";
    service.set(key, value);
    expect(service.get(key)).toBe(value);
  });
});
