import { LoadingComponent } from "src/app/shared/loading/loading.component";
import { moduleMetadata } from "@storybook/angular";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

export default {
  title: "loading",
  decorators: [moduleMetadata({ imports: [MatProgressSpinnerModule] })]
};

export const layout = () => ({
  component: LoadingComponent
});
