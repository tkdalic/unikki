import { TestBed } from "@angular/core/testing";

import { SwUpdateService } from "./sw-update.service";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "src/environments/environment";

describe("SwUpdateService", () => {
  let service: SwUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ServiceWorkerModule.register("ngsw-worker.js", {
          enabled: environment.production
        })
      ]
    });
    service = TestBed.inject(SwUpdateService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
