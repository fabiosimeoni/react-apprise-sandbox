import { BaseState } from "./model";
import { change } from "./helpers";


const setLoading = (state:BaseState) => (v:boolean) =>{
  change(state).with(s=>s.loading=v)
}

export const baseapi = (s:BaseState) => ({

  setLoading: setLoading(s)
})