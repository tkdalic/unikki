import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MarkdownEditorComponent } from "./markdown-editor.component";

describe("MarkdownEditorComponent", () => {
  let component: MarkdownEditorComponent;
  let fixture: ComponentFixture<MarkdownEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarkdownEditorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set markdown", () => {
    const testString = "test";
    spyOn(component.markdownChange, "emit");
    component.markdown = testString;
    fixture.detectChanges();
    expect(component.markdownChange.emit).toHaveBeenCalledWith(testString);
  });

  it("should emit onchange", () => {
    const testString = "test";
    spyOn(component.markdownChange, "emit");
    component.onChangeMarkdown(testString);
    fixture.detectChanges();
    expect(component.markdownChange.emit).toHaveBeenCalledWith(testString);
  });
});
