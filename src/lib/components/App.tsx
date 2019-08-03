import * as React from "react";

import "./styles.css";

import { StateProvider, useCreateState, BaseState, useLoadingEffect } from "../state";
import { userapi } from "../user";
import { Login } from "./Login";
import { Spinner } from "./Spinner";
import { ErrorBoundary } from "./ErrorBoundary";
import { configapi } from "../config";

type Props = {
  initState:BaseState, 
  main: () => JSX.Element 
}

// HOC to boostrap and uniformly style an application
export const App = (props:Props) => {
  
  const state = useCreateState(props.initState); 

  const users = userapi(state);
  const config = configapi(state);

  const ready = users.isLogged() || config.isDefined();
  
  useLoadingEffect( { state, 
                        unless: ready, 
                      task:() => config.fetch().then(users.fetchLogged) } ) 

  return (
   
  <div className="App">
  
      <ErrorBoundary>
        <StateProvider value={state} >
            <Spinner showOn={state.loading} renderIf={ready} >
                <Login />
                  <div className="App">
                    <props.main />
                  </div>
                  <button onClick={users.login}>Login</button>
                  <br />
                  <span className="Status">{state.config && "config loaded"}</span>
            </Spinner>  
        </StateProvider>
      </ErrorBoundary>

     </div>
  )
};
