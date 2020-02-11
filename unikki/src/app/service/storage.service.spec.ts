import { TestBed } from "@angular/core/testing";

import { StorageService } from "./storage.service";

describe("StorageService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", async () => {
    const service: StorageService = TestBed.inject(StorageService);
    expect(await service).toBeTruthy();
  });

  it("should be save and load", async () => {
    const service: StorageService = TestBed.inject(StorageService);
    const key = "key";
    const value = "value";
    await service.set(key, value);
    expect(await service.get(key)).toBe(value);
  });
});
