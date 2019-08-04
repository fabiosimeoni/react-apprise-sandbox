import * as React from "react";
import { connect } from "../lib";
import { thingapi } from "../thing";
import { State } from "../state";
import { Button } from "antd";

const $Things = (state:State) => {

  const things = thingapi(state);

  console.log("rending things");

  return <div>
          <br/>
          <Button onClick={ thingapi(state).addRandom }>Add a thing</Button>
          <br/><br/>
        {things.all().length === 0 ? "NoThing." : things.all().map((t,i) => <div key={i}>{t.name}</div>)}
        
  </div>;
};

export const Things = connect( $Things, state => state.things );
