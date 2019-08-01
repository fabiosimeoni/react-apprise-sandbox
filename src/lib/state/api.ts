import * as React from "react";
import { State, state, BaseModel } from "./model";
import produce from "immer";

const StateContext = React.createContext<State>(null);

//  custom name for the Provider
export const StateProvider = StateContext.Provider;

export const useCreateState = (initialModel: BaseModel) => {
  const initial: State = state();

  const [model, updater] = React.useState(initialModel);

  initial.model = model;
  initial.set = fun => updater(produce(data => void fun(data)));

  return initial;
};

// custom hook for all Consumers
export const useAppState = (): State => {
  return React.useContext<State>(StateContext);
};

export const connect = (Compo: (s: State) => JSX.Element, dependencies?: (data: BaseModel, s?: State) => [any]) => {
  return () => Stateful(Compo, dependencies);
};

const Stateful = (Compo: (s: State) => JSX.Element, dependencies?: (data: BaseModel, s?: State) => [any]) => {
  const state = useAppState();
  const deps = dependencies ? dependencies(state.model, state) : [state.model];
  // eslint-disable-next-line
  return React.useMemo(() => Compo({ ...state }), deps);
};
