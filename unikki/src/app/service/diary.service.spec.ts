import { TestBed } from "@angular/core/testing";

import { DiaryService } from "./diary.service";
import { Task } from "../resource-model/task";

describe("DiaryService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: DiaryService = TestBed.inject(DiaryService);
    expect(service).toBeTruthy();
  });

  it("should be string", () => {
    const tasks: Task[] = [
      { check: false, text: "hoge1" },
      { check: true, text: "hoge2" }
    ];
    const markdown = "# test\n" + "## test\n" + "testです\n";
    const diaryString =
      "## タスク\n\n" +
      "- [ ] hoge1\n" +
      "- [x] hoge2\n\n" +
      "## メモ\n\n" +
      "# test\n" +
      "## test\n" +
      "testです\n";

    const service: DiaryService = TestBed.inject(DiaryService);
    expect(service.toString({ tasks, markdown })).toBe(diaryString);
  });

  it("should be parse", () => {
    const tasks: Task[] = [
      { check: false, text: "hoge1" },
      { check: true, text: "hoge2" }
    ];
    const markdown = "# test\n" + "## test\n" + "testです\n";
    const diaryString =
      "## タスク\n\n" +
      "- [ ] hoge1\n" +
      "- [x] hoge2\n\n" +
      "## メモ\n\n" +
      "# test\n" +
      "## test\n" +
      "testです\n";

    const service: DiaryService = TestBed.inject(DiaryService);
    const diary = service.parse(diaryString);
    expect(diary.tasks).toEqual(tasks);
    expect(diary.markdown).toEqual(markdown);
  });

  it("should make diary title", () => {
    const service: DiaryService = TestBed.inject(DiaryService);
    const date = new Date(2020, 1, 10);
    const title = "20200210.md";
    expect(service.makeTitle(date)).toBe(title);
  });
});
