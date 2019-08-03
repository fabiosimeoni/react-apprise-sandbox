import * as React from "react"
import { BaseState } from "./model";
import { baseapi } from "./api";


export const useLoadingEffect = (state: BaseState, unless: ()=>boolean, task:()=>Promise<any>) => {

  React.useEffect( () => {
      
      if (unless())
           return
      baseapi(state).setLoading(true)
      task().then( value => { 
          baseapi(state).setLoading(false); 
          return value;
      })
      .catch( value =>baseapi(state).setLoading(false))
  },);
}
