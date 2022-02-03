import * as React from "react";
import { defineModule } from "zoov";
import { effect } from "zoov/utils";
import { exhaustMap, tap } from "rxjs/operators";
import { timer } from "rxjs";

const CounterModule = defineModule({ count: 0 })
  .actions({
    add: (draft) => draft.count++,
  })
  .methods(({ getActions }) => ({
    addAfter: effect<number>((payload$) =>
      payload$.pipe(
        exhaustMap((timeout) => {
          return timer(timeout).pipe(tap(() => getActions().add()));
        })
      )
    ),
  }))
  .build();

export const WithRxJS: React.FC = React.memo(() => {
  const [{ count }, { addAfter }] = CounterModule.use();

  const addOne = React.useCallback(() => {
    addAfter(300);
  }, []);

  return (
    <div>
      <h3>With RxJS</h3>
      <p>
        count: <b>{count}</b>
      </p>
      <button onClick={addOne}>+1 in 0.3s</button>
    </div>
  );
});
