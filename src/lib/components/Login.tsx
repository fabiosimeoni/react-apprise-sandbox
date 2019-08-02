import * as React from "react";
import { connect, State } from "../state";

const $Login = (state: State) => {
  console.log("rendering login");
  return <span>Logged: {state.model.logged.username}</span>;
};

export const Login = connect($Login, model=> model.logged );
