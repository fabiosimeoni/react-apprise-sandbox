import * as React from "react";

import "./styles.css";

import { StateProvider, useCreateState, BaseState, change, useLoadingEffect } from "../state";
import { api as userapi } from "../user";
import { Login } from "./Login";
import { Spinner } from "./Spinner";
import { ErrorBoundary } from "./ErrorBoundary";

type Props = {
  initState:BaseState, 
  main: () => JSX.Element 
}

// HOC to boostrap and uniformly style an application
export const App = (props:Props) => {
  
  //  initialise app state
  const state = useCreateState(props.initState); 
  const api = userapi(state);
  
  // load loogged user
  useLoadingEffect( state, api.isLogged, () => api.fetchLogged() ) 

  const loading = state.loading || !api.isLogged()

  return (
   
  <div className="App">
  
      <ErrorBoundary>
        <StateProvider value={state} >
            <Spinner when={loading} >
                <Login />
                  <div className="App">
                    <props.main />
                  </div>
                  <button onClick={api.login}>Login</button>
            </Spinner>  
        </StateProvider>
      </ErrorBoundary>

     </div>
  )
};
