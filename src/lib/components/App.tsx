import * as React from "react";

import "./styles.css";

import { StateProvider, useCreateState, BaseState, useLoadingEffect } from "../state";
import { userapi, randomUser } from "../user";
import { Login } from "./Login";
import { Spinner } from "./Spinner";
import { ErrorBoundary } from "./ErrorBoundary";
import { configapi } from "../config";
import { DialogBox } from "./DialogBox"
import { dialogapi, randomDialog } from "../dialog";

type Props = {
  initState:BaseState, 
  main: () => JSX.Element 
}

// HOC to boostrap and uniformly style an application
export const App = (props:Props) => {
  
  const state = useCreateState(props.initState); 

  const users = userapi(state);
  const config = configapi(state);
  const dialog = dialogapi(state);

  const ready = users.isLogged() || config.isDefined();
  
  useLoadingEffect( { state, 
                        unless: ready, 
                      task:() => config.fetch().then(users.fetchLogged)} ) 

  return (
   
  <div className="App">
  
      <ErrorBoundary>
        <StateProvider value={state} >
            <Spinner showOn={state.loading} renderIf={ready} >
                <Login />
                  <div className="App">
                    <props.main />
                  </div>
                  <button onClick={()=>users.set(randomUser())}>Login</button>
                  <button onClick={()=>dialog.open(randomDialog) }>Open Dialog</button>
                  <br />
                  <span className="Status">{state.config && "config loaded"}</span>
            </Spinner> 
            <DialogBox /> 
        </StateProvider>
      </ErrorBoundary>

     </div>
  )
};
