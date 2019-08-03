import { utils } from "../lib/utils";

export type Thing = {
  name: String;
};

export type ThingState = {
  things: Thing[];
};

export const initialThings: ThingState = { things: [] };

export const randomThing = () => ({ name: utils.random("thing") });
