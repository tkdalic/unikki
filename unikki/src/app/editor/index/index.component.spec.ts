import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IndexComponent } from "./index.component";
import { MarkdownEditorComponent } from "../markdown-editor/markdown-editor.component";
import { TodoListComponent } from "../todo-list/todo-list.component";
import { TodoComponent } from "../todo/todo.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { ExplorerModule } from "src/app/explorer/explorer.module";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("IndexComponent", () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        IndexComponent,
        MarkdownEditorComponent,
        TodoListComponent,
        TodoComponent
      ],
      imports: [
        FormsModule,
        SharedModule,
        ExplorerModule,
        MatCheckboxModule,
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    // gapiの処理を置き換える
    component.getUnikkiFile = async () => {};
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("can save and load", async () => {
    const testDiary = {
      tasks: [{ check: true, text: "test" }],
      markdown: "test"
    };
    component.diaryService.diary = Object.assign(testDiary);
    await component.saveDiary();
    component.diaryService.diary = null;
    await component.loadDiary();
    expect(component.diaryService.diary).toEqual(testDiary);
  });
});
