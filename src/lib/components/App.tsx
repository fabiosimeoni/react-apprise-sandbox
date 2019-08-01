import * as React from "react";

import "./styles.css";

import { State, StateProvider, useCreateState, BaseModel } from "../state";
import { api } from "../user";
import { Login } from "./Login";

// HOC to boostrap and uniformly style an application
export const App = (props: { model: BaseModel; main: (state: State) => JSX.Element }) => {
  const state: State = useCreateState(props.model);
  const Main = props.main;

  React.useEffect(
    () => void api.fetchLogged().then(u => state.set(model => (model.logged = u))),
    // eslint-disable-next-line
    []
  );


  return (
    <StateProvider value={state}>
      <div>
        <Login />
        <div className="App">
          <Main {...state} />
        </div>
        <button onClick={api.login}>Login</button>
      </div>
    </StateProvider>
  );
};
