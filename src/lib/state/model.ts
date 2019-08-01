import { UserModel, initialUser } from "../user";

export type BaseModel = UserModel & {};

export const initialModel = {
  logged: initialUser
};

var _state: State = {
  model: initialModel,
  set: undefined
};

export const state = () => {
  return _state;
};

//draft => void ( draft.logged.username = "Pino") )

export type State = {
  model: BaseModel;
  set: (fun: (draft: BaseModel) => any) => void;
};
