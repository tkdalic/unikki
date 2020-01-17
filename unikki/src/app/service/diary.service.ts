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

  toString(diary: Diary): string {
    const tasks = diary.tasks
      .map(task => {
        const check = task.check ? "x" : " ";
        return `- [${check}] ${task.text}`;
      })
      .join("\n");
    return `## タスク\n\n${tasks}\n\n## メモ\n\n${diary.markdown}`;
  }

  parse(value: string): Diary {
    const diary: Diary = { tasks: [], markdown: "" };
    const [taskString, memoString] = value.split("## メモ\n\n", 2);

    const tasks = taskString.match(/- \[( |x)\] (.+)\n/g);
    if (tasks) {
      diary.tasks = tasks.map(
        (task: string): Task => {
          const check = task[3] === "x";
          return { check, text: task.slice(6, task.length - 1) };
        }
      );
    }
    diary.markdown = memoString;
    return diary;
  }
}
