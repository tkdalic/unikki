import { ListViewComponent } from "src/app/explorer/list-view/list-view.component";

export default {
  title: "list-view"
};

export const todo = () => ({
  component: ListViewComponent,
  props: {
    items: [
      { name: "hoge1", id: "hoge" },
      { name: "hoge2", id: "hoge" },
      { name: "hoge3", id: "hoge" }
    ]
  }
});
