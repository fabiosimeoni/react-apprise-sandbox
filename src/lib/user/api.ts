import { BaseState, change } from "../state";
import { User, mockUser } from "./model";
import { utils } from "../utils";

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
  
  console.log("fetching logged user...")
  return Promise.resolve(mockUser)
              .then(utils.wait<User>(200))
              .then(u => change(state).with( s => { s.logged = u;}))

}


export const userapi = (s: BaseState) => ({
  login: login(s),
  isLogged: isLogged(s),
  fetchLogged: fetchLogged(s)
});