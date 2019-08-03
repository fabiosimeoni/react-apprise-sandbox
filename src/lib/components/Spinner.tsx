import * as React from "react";
import { ValOrGen, utils } from "../utils"


export const Spinner = (props : {showOn: ValOrGen<boolean>, renderIf: ValOrGen<boolean>, children:any}) => {


  const show = utils.asGenerator(props.showOn)
  const render = utils.asGenerator(props.renderIf) 

  return show() ? 
                    <span>Loading...</span> : 
                    render() ? 
                        <div>{props.children}</div> : 
                        null;
};
