import { Thing, randomThing } from "./model";
import { BaseModel, State } from "../lib";
import { AppModel } from "../state";

const cast = (model: BaseModel) => model as AppModel;

const all = (state: State) => () => {
  return cast(state.model).things;
};
const addRandom = (state: State) => () => {
  add(state)(randomThing());
};

const add = (state: State) => (t: Thing) => {
  state.set(model => cast(model).things.push(t));
};

export const api = (s: State) => ({
  add: add(s),
  addRandom: addRandom(s),
  all: all(s)
});
