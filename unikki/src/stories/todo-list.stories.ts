import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { TodoListComponent } from 'src/app/editor/todo-list/todo-list.component';

export default {
  title: "todo-list",
  decorators: [withKnobs]
};

export const todoList = () => ({
  component: TodoListComponent,
});
