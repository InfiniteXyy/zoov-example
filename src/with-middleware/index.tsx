import * as React from "react";
import { defineModule } from "zoov";
import { persist } from "zustand/middleware";
import { log } from "./log-middleware";

type State = { count: number };

const CounterModule = defineModule<State>({ count: 0 })
  .actions({
    add: (draft) => draft.count++,
    reset: (draft) => (draft.count = 0),
  })
  .middleware((store) =>
    persist(log(store, { prefix: "> setting state" }), {
      name: "counter-module",
    })
  )
  .build();

export const WithMiddleware: React.FC = React.memo(() => {
  const [{ count }, { add, reset }] = CounterModule.use();

  return (
    <div>
      <h3>With Middleware (custom log middleware & persist)</h3>
      <p>
        count: <b>{count}</b>
      </p>
      <button onClick={add}>+1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
});
