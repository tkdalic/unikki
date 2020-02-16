import { TodoComponent } from "src/app/editor/todo/todo.component";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { moduleMetadata } from "@storybook/angular";
import { MatCheckboxModule } from "@angular/material/checkbox";

export default {
  title: "todo",
  decorators: [withKnobs, moduleMetadata({ imports: [MatCheckboxModule] })]
};

export const todo = () => ({
  component: TodoComponent,
  props: {
    text: text("text", "test"),
    check: boolean("check", false)
  }
});
