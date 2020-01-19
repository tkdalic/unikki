import { withKnobs } from "@storybook/addon-knobs";
import { HeaderComponent } from "src/app/shared/header/header.component";

export default {
  title: "header",
  decorators: [withKnobs]
};

export const layout = () => ({
  component: HeaderComponent
});
