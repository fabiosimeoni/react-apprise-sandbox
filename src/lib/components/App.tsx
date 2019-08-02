import * as React from "react";

import "./styles.css";

import { State, StateProvider, useCreateState } from "../state";
import { api } from "../user";
import { Login } from "./Login";
import { Spinner } from "./Spinner";
import { ErrorBoundary } from "./ErrorBoundary";

// HOC to boostrap and uniformly style an application
export const App = (props) => {
  
  //  initialise app state
  const state: State = useCreateState(props.model); 

  
  // load loogged user
  React.useEffect(() => {
    if (!api.isLogged()) {
      state.model.loading = true;
      api.fetchLogged().then(u =>
        state.set(model => {
          model.logged = u;
          model.loading = false;
        })
      );
  }})

  const loading = state.model.loading || !api.isLogged()

  return (
   
  <div className="App">
  
  
  <StateProvider value={state} >
    <ErrorBoundary>
      <Spinner when={loading} >
          <Login />
            <div className="App">
              <props.main />
            </div>
            <button onClick={api.login}>Login</button>
      </Spinner>  
    </ErrorBoundary>
  </StateProvider>

     </div>
  )
};
