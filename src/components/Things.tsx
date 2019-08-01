import * as React from "react";
import { useAppState, connect } from "../lib";
import { api } from "../thing";

export const Compo = () => {
  const state = useAppState();
  const things = api(state);

  console.log("rending things");

  return <div>{things.all().length === 0 ? "NoThing." : things.all().map(t => <div>{t.name}</div>)}</div>;
};

export const Things = connect(
  Compo,
  (model, state) => [api(state).all()]
);
