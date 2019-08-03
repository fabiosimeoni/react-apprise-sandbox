import { BaseState, change } from "../state"
import { Dialog } from "./model"

const open = (state:BaseState) => (d : Dialog ) => change(state).with(s => s.dialog = d)
const close = (state:BaseState) => () => change(state).with(s => s.dialog = undefined)


export const dialogapi = ( s: BaseState ) => ({
    open: open(s),
    close: close(s)
})