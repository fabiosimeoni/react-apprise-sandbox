import { BaseState, change } from "../state";
import { User, randomUser } from "./model";
import { utils } from "../utils";

const set = (state:BaseState) => (user : User) => change(state).with(draft => draft.logged=user)
 
const isLogged = (state:BaseState) => () => {
  return state.logged !== undefined;
};

const fetchLogged = (state:BaseState) => () : Promise<void> => {
  
  console.log("fetching logged user...")
  return Promise.resolve(randomUser()).then(utils.wait<User>(200)).then(set(state))
}


export const userapi = (s: BaseState) => ({
  set: set(s),
  isLogged: isLogged(s),
  fetchLogged: fetchLogged(s)
});