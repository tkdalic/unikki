import { TestBed } from "@angular/core/testing";

import { DiaryService } from "./diary.service";
import { Task } from "../resource-model/task";

describe("DiaryService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: DiaryService = TestBed.get(DiaryService);
    expect(service).toBeTruthy();
  });

  it("should make diary", () => {
    const tasks: Task[] = [
      { check: false, text: "hoge1" },
      { check: true, text: "hoge1" }
    ];
    const markdown = "# test\n" + "## test\n" + "testです\n";

    const service: DiaryService = TestBed.get(DiaryService);
    const diary = service.make(tasks, markdown);

    expect(diary.tasks).toEqual(tasks);
    expect(diary.markdown).toBe(markdown);
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

    const service: DiaryService = TestBed.get(DiaryService);
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

    const service: DiaryService = TestBed.get(DiaryService);
    const diary = service.parse(diaryString);
    expect(diary.tasks).toEqual(tasks);
    expect(diary.markdown).toEqual(markdown);
  });
});
