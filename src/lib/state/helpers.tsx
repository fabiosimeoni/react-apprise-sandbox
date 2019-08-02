import * as React from "react";
import { BaseState } from "./model";
import produce from "immer";

const StateContext = React.createContext<BaseState>(null);

//  custom name for the Provider
export const StateProvider = StateContext.Provider;

export const useCreateState = (initialState: BaseState) : BaseState => {
  
  const [state, set] = React.useState(initialState);

  const handler = {   
    get : (target, key) =>  
          key === 'set' ?  
                (...args) => set(produce((draft)=>void(args[0](draft)))) :  
                target[key]
     
  }

  //return state;
  return new Proxy(state,handler);
};



//  injects global state into a component as props, specifying when to refresh the component.

//  clients use connect() to wrap the compoment, but connect(9 delegates the a <Stateful> component that can use Hooks. 

type depfactory =  (state: BaseState) => any

export const connect = (Compo: (props: BaseState) => JSX.Element, factories?: depfactory|depfactory[]) => {

  factories = factories || [s=>s] //  no arg: re-renders on each state change  (typical for containers)
  
  let deps = factories instanceof Array ? factories : [factories] // singleton: syncs with a particular piece of stage (tyopical for leaves)

  // by naming the wrapper we get better debugging 
  const connected = (props) => Stateful(props,Compo, deps);

  return connected;
};



const Stateful = (props: BaseState,Compo: (props:BaseState) => JSX.Element, factories?: depfactory[]) => {
  
  // pull state from Context
  const state = React.useContext<BaseState>(StateContext);

  // gather change specifications as paths into the state
  let deps = factories.map(f=>f(state));

  //  memoises the rendering of the origiinal component, conditionally to change speifications.
  return React.useMemo(() => <Compo  {...props} {...state} />, 
    // eslint-disable-next-line
    deps);
};
