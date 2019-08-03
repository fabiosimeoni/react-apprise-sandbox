import * as React from "react";
import { dialogapi } from "../dialog"
import { connect, BaseState } from "../state";

export const $DialogBox = (state:BaseState) => {
 
  const {dialog} = state;
 
  if (!dialog)
    return null

 
  const api = dialogapi(state);

  console.log("rendering dialog")

  return (
      <div className="Dialog">
            <span>{dialog.title}</span>
            <br /><br />
            <span>{dialog.description}</span>
            { dialog.details && 
              
              <>
                <br/><br/>
                <span>{dialog.details}</span>
               </>
            }
            <br/><br/>
            <button onClick={api.close}>Close</button>
      </div> 
  )

};

export const DialogBox = connect($DialogBox,state=>state.dialog)