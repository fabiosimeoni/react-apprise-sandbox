import { UserState } from "../user";
import { ConfigState } from "../config";
import { DialogState } from "../dialog"


export type BaseState =  UserState & MiscState & ConfigState & DialogState

type MiscState = {

  loading: boolean 

}

export const initialBase : BaseState = {
  
  dialog: undefined,
  logged: undefined,
  loading: false,
  config: undefined

}

