import { BaseModel, initialModel as initialBase } from "../lib";
import { ThingModel, initialThings } from "../thing/model";

export type AppModel = BaseModel & ThingModel;
export const initialModel = { ...initialBase, ...initialThings };
