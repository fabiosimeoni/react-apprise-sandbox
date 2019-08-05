import { UserState } from "../user";
import { ConfigState } from "../config";
import { BoxState } from "../box"


export type BaseState =  UserState & MiscState & ConfigState & BoxState

type MiscState = {

  loading: boolean 

}

export const initialBase : BaseState = {
  
  box: undefined,
  logged: undefined,
  loading: false,
  config: undefined

}

