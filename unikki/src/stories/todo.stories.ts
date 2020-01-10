import { TodoComponent } from "src/app/editor/todo/todo.component";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "todo",
  decorators: [withKnobs]
};

export const todo = () => ({
  component: TodoComponent,
  props: {
    text: text("text", "test"),
    check: boolean("check", false)
  }
});
