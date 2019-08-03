import * as React from "react"
import { BaseState } from "./model";
import { baseapi } from "./api";
import { ValOrGen, utils } from "../utils";



//  manageses loadng state on behalf of a task
export const useLoadingEffect = ({state,unless,description,task}: loadDirectives ) => {

  React.useEffect( () => {
      
      if (utils.asGenerator(unless)())
           return
      
      state.loading = true;
      
      task().then( value => { 
                baseapi(state).setLoading(false); 
                return value;
            })
            .catch( value =>baseapi(state).setLoading(false))
  });
}





export type loadDirectives = {

  state : BaseState,
  unless: ValOrGen<boolean>,
  description?: String,
  task: () => Promise<any>
}