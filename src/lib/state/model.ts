import { UserModel } from "../user";

export type BaseModel = UserModel & { loading: boolean };

export const initialModel = {
  logged: undefined,
  loading: false
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
