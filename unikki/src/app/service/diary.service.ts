import { Injectable } from "@angular/core";
import { Task } from "../resource-model/task";
import { Diary } from "../resource-model/diary";

@Injectable({
  providedIn: "root"
})
export class DiaryService {
  constructor() {}

  make(tasks: Task[], markdown: string): Diary {
    return {
      tasks,
      markdown
    };
  }

  file(diary: Diary): Blob {
    return new Blob();
  }
}
