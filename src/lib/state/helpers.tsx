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



//  injects global state into a component as props, specifying when to refresh the component.

//  clients use connect() to wrap the compoment, but connect(9 delegates the a <Stateful> component that can use Hooks. 

type depfactory =  (data: BaseModel, s?: State) => any

export const connect = (Compo: (props: State) => JSX.Element, factories?: depfactory|depfactory[]) => {

  factories = factories || [model=>model] //  no arg: re-renders on each state change  (typical for containers)
  
  let deps = factories instanceof Array ? factories : [factories] // singleton: syncs with a particular piece of stage (tyopical for leaves)

  // by naming the wrapper we get better debugging 
  const connected = (props) => Stateful(props,Compo, deps);
  
  return connected;
};



const Stateful = (props: State,Compo: (props:State) => JSX.Element, factories?: depfactory[]) => {
  
  // pull state from Context
  const state = React.useContext<State>(StateContext);

  // gather change specifications as paths into the state
  let deps = factories.map(f=>f(state.model,state));

  //  memoises the rendering of the origiinal component, conditionally to change speifications.
  return React.useMemo(() => <Compo  {...props} {...state} />, 
    // eslint-disable-next-line
    deps);
};
