import * as React from "react"
import { BaseState } from "./model";
import { baseapi } from "./api";



//  manageses loadng state on behalf of a task
export const useLoadingEffect = ({state,unless,task}: loadDirectives ) => {

  React.useEffect( () => {
      
      if (unless())
           return
      baseapi(state).setLoading(true)
      task().then( value => { 
                baseapi(state).setLoading(false); 
                return value;
            })
            .catch( value =>baseapi(state).setLoading(false))
  });
}





export type loadDirectives = {

  state : BaseState,
  unless: () => boolean,
  task: () => Promise<any>
}