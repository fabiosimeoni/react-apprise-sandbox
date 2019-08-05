import * as React from "react";
import { boxapi } from "../../box"
import { connect, BaseState } from "../../state";
import { Modal, Button } from "antd";

export const $DialogBox = (state:BaseState) => {
 
  const {box} = state;
 
  if (!box)
    return null

 
  const api = boxapi(state);

  console.log("rendering dialog")

  return (
    <Modal
      closable={false}
      title={box.title}
      visible={true}
      footer={<Button type="primary" onClick={api.close}>OK</Button>}
    >{box.description}
  </Modal>
  )

};

export const Box = connect($DialogBox,state =>state.box)