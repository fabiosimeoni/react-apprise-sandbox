import { state } from "../state";
import { User } from "./model";
//import { initialUser } from "./model";

const login = () => {
  state().set(model => {
    const name = model.logged.username ? "Pino" + Math.floor(Math.random() * 10).toString() : "Pino";
    model.logged.username = name;
  });
};
 
const isLogged = () => {
  return state().model.logged !== undefined;
};

const fetchLogged: ()=> Promise<User> = ()=> {
  
  return Promise.resolve({ username: "Romeo" }).then( wait<User>(1000));


}

function wait<T>(ms:any) {
  return function(x:T) {
    return new Promise<T>(resolve => setTimeout(() => resolve(x), ms));
  };
}

export const api = { login, isLogged, fetchLogged };
