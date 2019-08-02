import { BaseState, initialBase } from "../lib";
import { ThingModel, initialThings } from "../thing/model";

export type AppModel = BaseState & ThingModel;

export const initialBaseState = { ...initialBase, ...initialThings };
