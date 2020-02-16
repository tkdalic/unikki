import { withKnobs } from "@storybook/addon-knobs";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { moduleMetadata } from "@storybook/angular";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";

export default {
  title: "header",
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [MatIconModule, MatToolbarModule]
    })
  ]
};

export const layout = () => ({
  component: HeaderComponent
});
