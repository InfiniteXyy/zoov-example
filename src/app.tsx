import { BasicUsage } from "./basic-usage";
import { WithComputed } from "./with-computed";
import { WithMiddleware } from "./with-middleware";
import { WithProvider } from "./with-provider";
import { WithRxJS } from "./with-rxjs";
import { WithSelector } from "./with-selector";
import { WithSelectorAuto } from "./with-selector-auto";
import { WithSetState } from "./with-set-state";
import { WithTransientScope } from "./with-transient-scope";

export const App = () => {
  return (
    <div>
      <BasicUsage />
      <WithComputed />
      <WithMiddleware />
      <WithProvider />
      <WithSetState />
      <WithRxJS />
      <WithSelector />
      <WithSelectorAuto />
      <WithTransientScope />
    </div>
  );
};
