import * as React from "react";

import "./styles.css";
import { connect } from "../lib/state";
import { Things } from "./Things";
import { thingapi } from "../thing";
import { State } from "../state";

const $Main = (state:State) => {

  return (
    <div className="main">
      <br/><br/>
      <button onClick={ thingapi(state).addRandom }>Add a thing</button>
      <br/><br/>
      <Things />
     </div>
  );
};


export const Main = connect($Main)