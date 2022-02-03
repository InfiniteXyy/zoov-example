import { StateCreator } from "zustand";

type State = { count: number };

// forked from https://github.com/pmndrs/zustand
export const log = (
  create: StateCreator<State>,
  options: { prefix: string }
): StateCreator<State> => (set, get, api) =>
  create(
    args => {
      set(args);
      console.log(options.prefix, get());
    },
    get,
    api
  );
