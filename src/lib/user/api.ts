import { BaseState } from "../state";
import { User } from "./model";

const login = (state:BaseState) => () => {
  state.set(draft => {
    const name = draft.logged.username ? "Pino" + Math.floor(Math.random() * 10).toString() : "Pino";
    draft.logged.username = name;
  });
};
 
const isLogged = (state:BaseState) => () => {
  return state.logged !== undefined;
};

const fetchLogged = (state:BaseState) => () : Promise<User> => {
  
  return Promise.resolve({ username: "Romeo" }).then( wait<User>(1000));


}

function wait<T>(ms:any) {
  return function(x:T) {
    return new Promise<T>(resolve => setTimeout(() => resolve(x), ms));
  };
}

export const api = (s: BaseState) => ({
  login: login(s),
  isLogged: isLogged(s),
  fetchLogged: fetchLogged(s)
});