import * as React from "react";

import "./styles.css";

import { StateProvider, useCreateState, BaseState, useLoadingEffect } from "../state";
import { userapi } from "../user";
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
  
  // load logged user, if requried
  useLoadingEffect( { state, 
                      unless:api.isLogged, 
                    task:() => api.fetchLogged()} ) 

  return (
   
  <div className="App">
  
      <ErrorBoundary>
        <StateProvider value={state} >
            <Spinner showOn={state.loading} renderIf={api.isLogged} >
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
