import * as React from "react";
import { defineModule } from "zoov";

const INITIAL_STATE = { count: 0, deep: { input: "" } };
const { use: useExampleModule } = defineModule(INITIAL_STATE)
  .actions({
    add: (draft, payload: number = 1) => (draft.count += payload),
    setInput: (draft, input: string) => (draft.deep.input = input),
  })
  .build();

export const ResetStateUsage = React.memo(() => {
  const [{ count, deep }, { add, setInput, $reset }] = useExampleModule();

  return (
    <div>
      <h3>Reset State</h3>
      <button onClick={$reset}>Reset</button>
      <button onClick={() => add(1)}>+1</button>
      <input value={deep.input} onChange={(e) => setInput(e.target.value)} />
      <p>
        count: <b style={{ marginRight: 20 }}>{count}</b> input: <b>{deep.input || "empty"}</b>
      </p>
    </div>
  );
});
