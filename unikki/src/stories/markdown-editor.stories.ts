import { MarkdownEditorComponent } from "../app/editor/markdown-editor/markdown-editor.component";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "markdown-editor",
  decorators: [withKnobs]
};

export const markdownEditor = () => ({
  component: MarkdownEditorComponent,
  props: { markdown: text("markdown", "test") }
});
