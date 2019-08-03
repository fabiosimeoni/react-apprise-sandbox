import * as React from "react";
import { DividerRight } from "../lib";
import { UserBadge } from "./UserBadge";

import "./styles.css";
import { connect } from "../lib/state";
import { Things } from "./Things";
import { api } from "../thing";
import { State } from "../state";

const $Main = (state:State) => {

  return (
    <div className="main">
      <DividerRight>
        <UserBadge />
      </DividerRight>
      <h1>Hello Apprise</h1>
      <span>Welcome, {state.logged.username}</span>
      <br/><br/>
      <button onClick={ api(state).addRandom }>Add a thing</button>
      <br/><br/>
      <Things />
     </div>
  );
};


export const Main = connect($Main)