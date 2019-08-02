import * as React from "react";
import { State, connect } from "../lib/state";

export const Compo = (state:State) => 
    <div className="userBadge">Welcome: {state.model.logged.username}</div>
  


export const UserBadge = connect(Compo, model => model.logged )
