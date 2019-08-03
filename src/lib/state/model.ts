import { UserState } from "../user";


export type BaseState =  UserState & MiscState;

type MiscState = {

  loading: boolean 
}

export const initialBase : BaseState = {
  
  logged: undefined,
  loading: false

}

