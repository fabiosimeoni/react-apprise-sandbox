import { Thing, randomThing } from "./model";
import { BaseState } from "../lib";
import { AppModel } from "../state";

const cast = (state: BaseState) => state as AppModel;

const all = (state: BaseState) => () => {
  return cast(state).things;
};
const addRandom = (state: BaseState) => () => {
  add(state)(randomThing());
};

const add = (state: BaseState) => (t: Thing) => {
  state.set(state => cast(state).things.push(t));
};

export const api = (s: BaseState) => ({
  add: add(s),
  addRandom: addRandom(s),
  all: all(s)
});
