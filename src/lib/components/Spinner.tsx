import * as React from "react";
import { ValOrGen, utils } from "../utils"
import { Spin } from "antd";


export const Spinner = (props : {showOn: ValOrGen<boolean>, renderIf: ValOrGen<boolean>, children:any}) => {


  const show = utils.asGenerator(props.showOn)
  const render = utils.asGenerator(props.renderIf) 

  return show() ? 
                    <Spin size="large" />: 
                    render() ? 
                        <div>{props.children}</div> : 
                        null;
};
