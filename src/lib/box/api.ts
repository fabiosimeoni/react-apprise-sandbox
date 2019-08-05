import { BaseState, change } from "../state"
import { Box } from "./model"

const open = (state:BaseState) => (d : Box ) => change(state).with(s => s.box = d)
const close = (state:BaseState) => () => change(state).with(s => s.box = undefined)


export const boxapi = ( s: BaseState ) => ({
    open: open(s),
    close: close(s)
})