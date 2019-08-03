import { BaseState, initialBase } from "../lib";
import { ThingState, initialThings } from "../thing/model";

export type State = BaseState & ThingState;

export const initialState : State = { ...initialBase, ...initialThings };
