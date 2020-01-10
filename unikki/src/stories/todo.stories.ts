import { TodoComponent } from "src/app/editor/todo/todo.component";

export default {
  title: "todo"
};

export const todo = () => ({
  component: TodoComponent,
  props: { text: "test" }
});
