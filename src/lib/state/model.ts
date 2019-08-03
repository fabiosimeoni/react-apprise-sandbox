import { UserState } from "../user";
import { ConfigState } from "../config";


export type BaseState =  UserState & MiscState & ConfigState;

type MiscState = {

  loading: boolean 
}

export const initialBase : BaseState = {
  
  logged: undefined,
  loading: false,
  config: undefined

}

