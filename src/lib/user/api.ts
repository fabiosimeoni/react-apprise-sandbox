import { BaseState, change } from "../state";
import { User } from "./model";
import { wait } from "../utils";

const login = (state:BaseState) => () => {
  change(state).with( draft => {
    const name = draft.logged.username ? "Pino" + Math.floor(Math.random() * 10).toString() : "Pino";
    draft.logged.username = name;
  });
};
 
const isLogged = (state:BaseState) => () => {
  return state.logged !== undefined;
};

const fetchLogged = (state:BaseState) => () : Promise<void> => {
  
  return Promise.resolve({ username: "Romeo" })
              .then(wait<User>(200))
              .then(u => change(state).with( s => { s.logged = u;}))

}


export const userapi = (s: BaseState) => ({
  login: login(s),
  isLogged: isLogged(s),
  fetchLogged: fetchLogged(s)
});