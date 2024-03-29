import * as React from "react";
import { defineModule } from "zoov";

const CounterModule = defineModule({ count: 0 })
  .actions({
    add: (draft, payload: number = 1) => (draft.count += payload),
    minus: (draft, payload: number = 1) => (draft.count -= payload),
  })
  .computed({
    doubled: (state) => state.count * 2,
  })
  .methods({
    // Define [async] functions via methods
    async waitAndAdd(payload: number = 1, timeout: number = 1000) {
      await new Promise((resolve) => setTimeout(resolve, timeout));
      this.getActions().add(payload);
      console.log("doubled is", this.getComputed().doubled);
    },
  })
  .build();

function addTwo() {
  // Get the module state/actions outside components
  CounterModule.getActions().add(2);
}

const Computed = React.memo(() => {
  const { doubled } = CounterModule.useComputed();
  return (
    <>
      doubled: <b>{doubled}</b>
    </>
  );
});

export const BasicUsage = React.memo(() => {
  const [{ count }, { add, minus, waitAndAdd }] = CounterModule.use();

  return (
    <div>
      <h3>Basic Usage</h3>
      <p>
        count: <b style={{ marginRight: 20 }}>{count}</b> <Computed />
      </p>
      <button onClick={() => minus(1)}>-1</button>
      <button onClick={() => add(1)}>+1</button>
      <button onClick={addTwo}>+2</button>
      <button onClick={() => waitAndAdd()}>waitAndAdd</button>
    </div>
  );
});
