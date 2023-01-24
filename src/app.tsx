import { BasicUsage } from "./basic-usage";
import { ResetStateUsage } from "./reset-state";
import { WithComputed } from "./with-computed";
import { WithMiddleware } from "./with-middleware";
import { WithProvider } from "./with-provider";
import { WithRxJS } from "./with-rxjs";
import { WithSelector } from "./with-selector";
import { WithSelectorAuto } from "./with-selector-auto";
import { WithSetState } from "./with-set-state";
import { WithSubscription } from "./with-subscription";
import { WithTransientScope } from "./with-transient-scope";

export const App = () => {
  return (
    <div>
      <BasicUsage />
      <ResetStateUsage />
      <WithComputed />
      <WithMiddleware />
      <WithProvider />
      <WithSetState />
      <WithRxJS />
      <WithSelector />
      <WithSelectorAuto />
      <WithTransientScope />
      <WithSubscription />
    </div>
  );
};
