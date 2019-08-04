
import * as React from "react"
import { ScaffoldModel } from "./model";
import { connect, BaseState } from "../../state";
import { userapi } from "../../user";
import { dialogapi, randomDialog } from "../../dialog";
import { randomUser } from "../../user";
import { Login } from "../Login";

type Props = BaseState & {

   model : ScaffoldModel

}

const $Scaffold = (props: Props ) => {
  
  const users = userapi(props);
  const dialog = dialogapi(props);

  return <div style={{ textAlign: "center" }}>
      <Login />        
      <h1>Hello Apprise</h1>
      <br/>
      { (props as any).children }
      <br/>
      <button onClick={()=>users.set(randomUser())}>Login</button>
              <button onClick={()=>dialog.open(randomDialog) }>Open Dialog</button>
              <br />
              <span className="Status">{props.config && "config loaded"}</span>
  </div>
}

export const Scaffold = connect($Scaffold)