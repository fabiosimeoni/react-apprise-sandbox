export type Thing = {
  name: String;
};

export type ThingState = {
  things: Thing[];
};

export const initialThings: ThingState = { things: [] };

export const randomThing = () => ({ name: "Pino" + Math.floor(Math.random() * 100) });
