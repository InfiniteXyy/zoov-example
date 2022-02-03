import * as React from "react";
import { defineModule } from "zoov";

const CounterModule = defineModule({ count: 0 })
  .actions({
    add: (draft) => draft.count++,
    minus: (draft) => draft.count--,
  })
  .computed({
    doubled: (state) => state.count * 2,
  })
  .build();

export const BasicUsage: React.FC = React.memo(() => {
  const [{ count }, { add, minus }] = CounterModule.use();
  const { doubled } = CounterModule.useComputed();

  return (
    <div>
      <h3>Basic Usage</h3>
      <p>
        count: <b style={{ marginRight: 20 }}>{count}</b> doubled: <b>{doubled}</b>
      </p>
      <button onClick={minus}>-1</button>
      <button onClick={add}>+1</button>
    </div>
  );
});
