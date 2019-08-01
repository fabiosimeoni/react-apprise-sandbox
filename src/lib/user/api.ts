import { state } from "../state";
//import { initialUser } from "./model";

const login = () => {
  state().set(model => {
    const name = model.logged.username ? "Pino" + Math.floor(Math.random() * 10).toString() : "Pino";
    model.logged.username = name;
  });
};

const fetchLogged = () => Promise.resolve({ username: "Romeo" });

export const api = { login, fetchLogged };
