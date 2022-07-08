import * as React from "react";
import { defineModule } from "zoov";
import { useTrackedModule } from "zoov/tracked";

const CounterModule = defineModule({ count: 0, input: "hello" })
  .actions({
    add: (draft) => draft.count++,
    setInput: (draft, value: string) => (draft.input = value),
  })
  .build();

const InputComponent = React.memo(() => {
  const [{ input }, { setInput }] = useTrackedModule(CounterModule);
  console.log("input component rerender");
  return <input value={input} onChange={(e) => setInput(e.target.value)} />;
});

export const WithSelectorAuto = React.memo(() => {
  const [{ count, input }, { add }] = useTrackedModule(CounterModule);

  return (
    <div>
      <h3>With Selector Auto (based on react-tracked)</h3>
      <p>
        count: <b style={{ marginRight: 20 }}>{count}</b> input: <b>{input}</b>
      </p>
      <button onClick={add}>+1</button>
      <InputComponent />
    </div>
  );
});
