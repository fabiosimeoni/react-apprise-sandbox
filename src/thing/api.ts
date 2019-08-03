import { Thing, randomThing } from "./model";
import { State } from "../state";
import { change } from "../lib";

const all = (state: State) => () => {
  return state.things;
};
const addRandom = (state: State) => () => {
  add(state)(randomThing());
};

const add = (state: State) => (t: Thing) => {
  change(state).with(draft => draft.things.push(t));
};

export const thingapi = (s: State) => ({
  add: add(s),
  addRandom: addRandom(s),
  all: all(s)
});
