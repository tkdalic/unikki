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

  it("should emit focus next", () => {
    spyOn(component.focusNext, "emit");
    component.onArrowDown();
    fixture.detectChanges();
    expect(component.focusNext.emit).toHaveBeenCalled();
  });

  it("should emit focus prev", () => {
    spyOn(component.focusPrev, "emit");
    component.onArrowUp();
    fixture.detectChanges();
    expect(component.focusPrev.emit).toHaveBeenCalled();
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

  it("should emit text", () => {
    const testValue = "test";
    spyOn(component.textChange, "emit");
    component.onChangeText(testValue);
    fixture.detectChanges();
    expect(component.textChange.emit).toHaveBeenCalledWith(testValue);
  });

  it("should emit check", () => {
    const testValue = false;
    spyOn(component.checkChange, "emit");
    component.onChangeCheck(testValue);
    fixture.detectChanges();
    expect(component.checkChange.emit).toHaveBeenCalledWith(testValue);
  });
});
