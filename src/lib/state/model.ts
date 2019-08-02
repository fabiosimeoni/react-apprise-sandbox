import { UserState } from "../user";

export type BaseState = { 

  set?: (fun: (draft: BaseState) => any) => void;
  loading: boolean 

} 

& UserState;

export const initialBase: BaseState = {

  logged: undefined,
  loading: false
};

