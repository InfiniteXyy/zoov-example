import { StateCreator } from "zustand";

type State = { count: number };

// forked from https://github.com/pmndrs/zustand
export const log =
  (create: StateCreator<State, any, any, any>, options: { prefix: string }): StateCreator<State, any, any, any> =>
  (set, get, api) => {
    const newSet: typeof set = (...args) => {
      set(...args);
      console.log(options.prefix, get());
    };
    return create(newSet, get, api);
  };
