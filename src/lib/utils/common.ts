
export type ValOrGen<T> = T | (() => T)

const asGenerator = (v:any) : Function => (typeof v === "function") ? v : () => v

const wait = <T> (ms:any) => (x:T) => new Promise<T>(v => setTimeout(() => v(x), ms));

const random = (thing:string, range : number=100) => 
  thing + Math.floor(Math.random() * 100)

export const utils = {
    asGenerator,wait, random
}