import * as React from "react"

import { State } from "../state"
import { connect, randomUser, userapi } from "../lib";
import { Button } from "antd";
import { randomDialog, boxapi } from "../lib";
import Title from "antd/lib/typography/Title";

const $Home = ( state: State) => {

  const users = userapi(state);
  const box = boxapi(state);

  return (
      <>
      <Title  >Hello Apprise</Title>
      <br/>
      <Button onClick={()=>users.set(randomUser())}>Login</Button>
      <Button onClick={()=>box.open(randomDialog) }>Open Dialog</Button>
      </>
  )
}


export const Home = connect($Home);