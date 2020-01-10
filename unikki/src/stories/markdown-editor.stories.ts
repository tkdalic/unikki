import { MarkdownEditorComponent } from "../app/editor/markdown-editor/markdown-editor.component";

export default {
  title: "markdown-editor"
};

export const markdownEditor = () => ({
  component: MarkdownEditorComponent,
  props: { markdown: "test" }
});
