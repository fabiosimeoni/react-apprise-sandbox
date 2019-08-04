import * as React from "react"

import { State } from "../state"
import { connect, randomUser, userapi } from "../lib";
import { Button } from "antd";
import { randomDialog, dialogapi } from "../lib/dialog";
import Title from "antd/lib/typography/Title";

const $Home = ( state: State) => {

  const users = userapi(state);
  const dialog = dialogapi(state);

  return (
      <>
      <Title  >Hello Apprise</Title>
      <br/>
      <Button onClick={()=>users.set(randomUser())}>Login</Button>
      <Button onClick={()=>dialog.open(randomDialog) }>Open Dialog</Button>
      <br />
      <span className="Status">{state.config && "config loaded"}</span>
      </>
  )
}


export const Home = connect($Home);