import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListViewComponent } from "./list-view.component";
import { FileItem } from "src/app/resource-model/fileItem";
import { MatListModule } from "@angular/material/list";

describe("ListViewComponent", () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListViewComponent],
      imports: [MatListModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit click item", () => {
    const fileItem: FileItem = { name: "test", id: "testId" };
    spyOn(component.clickItem, "emit");
    component.onClickItem(fileItem);
    fixture.detectChanges();
    expect(component.clickItem.emit).toHaveBeenCalledWith(fileItem);
  });
});
