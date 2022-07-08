import * as React from "react";
import { BasicUsage } from "./basic-usage";
import { WithMiddleware } from "./with-middleware";
import { WithProvider } from "./with-provider";
import { WithRxJS } from "./with-rxjs";
import { WithSelector } from "./with-selector";
import { WithSelectorAuto } from "./with-selector-auto";
import { WithSetState } from "./with-set-state";

export const App = () => {
  return (
    <div>
      <BasicUsage />
      <WithMiddleware />
      <WithProvider />
      <WithSetState />
      <WithRxJS />
      <WithSelector />
      <WithSelectorAuto />
    </div>
  );
};
