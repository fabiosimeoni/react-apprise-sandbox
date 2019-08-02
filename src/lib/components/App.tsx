import * as React from "react";

import "./styles.css";

import { StateProvider, useCreateState } from "../state";
import { api as userapi } from "../user";
import { Login } from "./Login";
import { Spinner } from "./Spinner";
import { ErrorBoundary } from "./ErrorBoundary";

// HOC to boostrap and uniformly style an application
export const App = (props) => {
  
  //  initialise app state
  const state = useCreateState(props.model); 
  const api = userapi(state);
  
  // load loogged user
  React.useEffect(() => {

    if (!api.isLogged()) {
      state.loading = true;
      api.fetchLogged().then(u =>
        state.set(s => {
          s.logged = u;
          s.loading = false;
        })
      );
  }})

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
