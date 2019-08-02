import * as React from "react";
import { connect, BaseState } from "../lib/state";

export const Compo = (state:BaseState) => 
    <div className="userBadge">Welcome: {state.logged.username}</div>
  


export const UserBadge = connect(Compo, model => model.logged )
