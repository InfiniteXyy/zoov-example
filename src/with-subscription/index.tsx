import * as React from "react";
import { defineModule } from "zoov";

const { use: useModule } = defineModule({
  count: 0,
  input: "",
})
  .subscribe(console.log)
  .subscribe({
    selector: (state) => state.input,
    listener: async (current, prev, { addCleanup }) => {
      let isCleanedUp = false;
      addCleanup(() => (isCleanedUp = true));
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (isCleanedUp) return;
      console.log(`input is ${current}, debounced 500ms`);
    },
  })
  .build();

export const WithSubscription = React.memo(() => {
  const [state, { $setState }] = useModule();

  return (
    <div>
      <h3>With subscription</h3>
      <div>{JSON.stringify(state)}</div>
      <button onClick={() => $setState("count", (count) => count + 1)}>Add</button>
      <input onChange={(e) => $setState("input", e.target.value)} value={state.input} />
    </div>
  );
});
