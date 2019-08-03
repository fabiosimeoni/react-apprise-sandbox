
export type ValOrGen<T> = T | (() => T)

const asGenerator = (v:any) : Function => (typeof v === "function") ? v : () => v

export const wait = <T> (ms:any) => (x:T) => new Promise<T>(v => setTimeout(() => v(x), ms));

export const utils = {
  asGenerator,wait
}
