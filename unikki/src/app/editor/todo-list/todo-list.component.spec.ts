import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoListComponent } from "./todo-list.component";
import { TodoComponent } from "../todo/todo.component";
import { FormsModule } from "@angular/forms";

describe("TodoListComponent", () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent, TodoComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("addTask", () => {
    component.tasks = [];
    component.firstTask = { text: "test", check: false };
    component.addTask();
    expect(component.tasks).toEqual([{ text: "test", check: false }]);
    expect(component.firstTask).toEqual({ text: "", check: false });
  });

  it("onEnter", () => {
    component.tasks = [
      { text: "test0", check: true },
      { text: "test1", check: true },
      { text: "test2", check: true }
    ];
    component.onEnter(1);
    expect(component.tasks).toEqual([
      { text: "test0", check: true },
      { text: "test1", check: true },
      { text: "", check: false },
      { text: "test2", check: true }
    ]);
  });

  it("onDelete", () => {
    component.tasks = [
      { text: "test0", check: true },
      { text: "test1", check: true },
      { text: "test2", check: true }
    ];
    component.onDelete(1);
    expect(component.tasks).toEqual([
      { text: "test0", check: true },
      { text: "test2", check: true }
    ]);
  });
});
