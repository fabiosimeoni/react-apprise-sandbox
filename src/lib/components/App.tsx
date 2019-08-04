import * as React from "react";

import "./styles.css";

import { StateProvider, useCreateState, BaseState, useLoadingEffect } from "../state";
import { userapi } from "../user";
import { Spinner } from "./Spinner";
import { ErrorBoundary } from "./ErrorBoundary";
import { configapi } from "../config";
import { DialogBox } from "./DialogBox"

type Props = {
  initState:BaseState, 
  children: React.ReactElement
}

// HOC to boostrap and uniformly style an application
export const App = (props:Props) => {
  
  const state = useCreateState(props.initState); 

  const users = userapi(state);
  const config = configapi(state);

  const ready = users.isLogged() || config.isDefined();
  
  useLoadingEffect( { state, 
                        unless: ready, 
                      task:() => config.fetch().then(users.fetchLogged)} ) 

  return (
   
  <div className="App">
  
      <ErrorBoundary>
        <StateProvider value={state} >
            <Spinner showOn={state.loading} renderIf={ready} >
              <div className="App">
                {props.children}
              </div>
            </Spinner> 
            <DialogBox /> 
        </StateProvider>
      </ErrorBoundary>

     </div>
  )
}
