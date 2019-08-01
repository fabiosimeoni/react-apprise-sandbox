import * as React from "react";
import { connect, State } from "../state";

const Compo = (state: State) => {
  console.log("rendering login");
  return <span>Logged: {state.model.logged.username}</span>;
};

export const Login = connect(Compo, model=> [model.logged] );
