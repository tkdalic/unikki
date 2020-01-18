import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IndexComponent } from "./index.component";
import { MarkdownEditorComponent } from "../markdown-editor/markdown-editor.component";
import { TodoListComponent } from "../todo-list/todo-list.component";
import { TodoComponent } from "../todo/todo.component";
import { FormsModule } from "@angular/forms";

describe("IndexComponent", () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IndexComponent,
        MarkdownEditorComponent,
        TodoListComponent,
        TodoComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("can save and load", () => {
    const testDiary = {
      tasks: [{ check: true, text: "test" }],
      markdown: "test"
    };
    component.diary = Object.assign(testDiary);
    component.saveDiary();
    component.diary = null;
    component.loadDiary();
    expect(component.diary).toEqual(testDiary);
  });
});
