import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExplorerComponent } from "./explorer.component";
import { ListViewComponent } from "../list-view/list-view.component";
import { MatListModule } from "@angular/material/list";

describe("ExplorerComponent", () => {
  let component: ExplorerComponent;
  let fixture: ComponentFixture<ExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExplorerComponent, ListViewComponent],
      imports: [MatListModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
