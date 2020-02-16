import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { moduleMetadata } from "@storybook/angular";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export default {
  title: "layout",
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [MatSidenavModule, BrowserAnimationsModule]
    })
  ]
};

export const layout = () => ({
  moduleMetadata: {
    declarations: [LayoutComponent]
  },
  template: `<app-layout>
  <ng-container header>header</ng-container>
  <ng-container main>main</ng-container>
  </app-layout>`
});
