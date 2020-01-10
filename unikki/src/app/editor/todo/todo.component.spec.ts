import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoComponent } from "./todo.component";
import { FormsModule } from "@angular/forms";

describe("TodoComponent", () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit enter", () => {
    spyOn(component.enterChange, "emit");
    component.onEnter();
    fixture.detectChanges();
    expect(component.enterChange.emit).toHaveBeenCalled();
  });

  it("should not emit delete", () => {
    spyOn(component.deleteChange, "emit");
    component.onDelete();
    component.text = "test";
    fixture.detectChanges();
    expect(component.deleteChange.emit).toHaveBeenCalled();
  });

  it("should emit delete", () => {
    spyOn(component.deleteChange, "emit");
    component.onDelete();
    component.text = "";
    fixture.detectChanges();
    expect(component.deleteChange.emit).toHaveBeenCalled();
  });
});