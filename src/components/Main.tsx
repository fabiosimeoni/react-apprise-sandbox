import * as React from "react";
import { DividerRight } from "../lib";
import { UserBadge } from "./UserBadge";

import "./styles.css";
import { State, connect } from "../lib/state";
import { Things } from "./Things";
import { api } from "../thing";

const $Main = (state:State) => {

  return (
    <div className="main">
      <DividerRight>
        <UserBadge />
      </DividerRight>
      <h1>Hello Apprise</h1>
      <span>Welcome, {state.model.logged.username}</span>
      <div>
        <button onClick={api(state).addRandom}>Add a thing</button>
      </div>
      <br/>
      <Things />
     </div>
  );
};


export const Main = connect($Main)