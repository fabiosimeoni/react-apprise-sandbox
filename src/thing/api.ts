import { Thing } from "./model";

export type Api = {
  foo: (t: Thing) => void;
};

export const api: Api = {
  foo: t => {}
};
