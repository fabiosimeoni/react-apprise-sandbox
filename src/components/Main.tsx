import * as React from "react";
import { DividerRight } from "./Dividers";
import { UserBadge } from "./UserBadge";

import "./styles.css";
import { State } from "../lib/state";
import { Things } from "./Things";
import { api } from "../thing";

export const Main = (state: State) => {
  return (
    <div>
      <DividerRight>
        <UserBadge />
      </DividerRight>
      <h1>Hello Apprise</h1>
      <span>Welcome, {state.model.logged.username}</span>
      <div style={{ margin: 20 }}>
        <Things />
      </div>
      <button onClick={api(state).addRandom}>Add a thing</button>
    </div>
  );
};
