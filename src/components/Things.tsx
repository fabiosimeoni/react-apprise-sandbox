import * as React from "react";
import { connect, State } from "../lib";
import { api } from "../thing";

const $Things = (state:State) => {

  const things = api(state);

  console.log("rending things");

  return <div>{things.all().length === 0 ? "NoThing." : things.all().map((t,i) => <div key={i}>{t.name}</div>)}</div>;
};

export const Things = connect(
  $Things,
  (model, state) => api(state).all()
);
