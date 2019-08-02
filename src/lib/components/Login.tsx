import * as React from "react";
import { connect, BaseState } from "../state";

const $Login = (state: BaseState) => {
  console.log("rendering login");
  return <span>Logged: {state.logged.username}</span>;
};

export const Login = connect($Login, state=> state.logged );
