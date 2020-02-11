import { TestBed } from "@angular/core/testing";

import { FileService } from "./file.service";
import { MarkdownFile } from "../resource-model/markdownFile";

describe("FileService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: FileService = TestBed.inject(FileService);
    expect(service).toBeTruthy();
  });

  it("should read and write file contents", async () => {
    const service: FileService = TestBed.inject(FileService);
    const markdownFile: MarkdownFile = {
      title: "test.md",
      contents: "# test"
    };
    const file = service.make(markdownFile);
    expect(file).toBeTruthy();
    expect(file.type).toBe("text/markdown");
    const contents = await service.read(file);
    expect(contents.title).toBe(markdownFile.title);
    expect(contents.contents).toBe(markdownFile.contents);
  });
});
