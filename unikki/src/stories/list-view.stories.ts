import { ListViewComponent } from "src/app/explorer/list-view/list-view.component";
import { moduleMetadata } from "@storybook/angular";
import { MatListModule } from "@angular/material/list";

export default {
  title: "list-view",
  decorators: [
    moduleMetadata({
      imports: [MatListModule]
    })
  ]
};

export const todo = () => ({
  component: ListViewComponent,
  props: {
    selectId: "hoge1",
    items: [
      { name: "hoge1", id: "hoge1" },
      { name: "hoge2", id: "hoge2" },
      { name: "hoge3", id: "hoge3" }
    ]
  }
});
