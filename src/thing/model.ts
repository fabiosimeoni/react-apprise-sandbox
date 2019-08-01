export type Thing = {
  name: String;
};

export type ThingModel = {
  things: Thing[];
};

export const initialThings: ThingModel = { things: [] };

export const randomThing = () => ({ name: "Pino" + Math.floor(Math.random() * 100) });
