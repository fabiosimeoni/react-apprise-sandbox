import { BaseState, change } from "../state"
import { mockConfig, Config } from "./model";

const get = (state:BaseState) => () => state.config
const set = (state:BaseState) => (c: Config) => change(state).with( s => s.config = c )

const isDefined = (state:BaseState) => () => state.config !== undefined

const fetch = (state:BaseState) => () => {

  console.log("loading configuration...")
  return Promise.resolve(mockConfig).then(set(state))
}

export const configapi = (s: BaseState ) => ({

  isDefined: isDefined(s),
  get : get(s),
  fetch: fetch(s)
  
}) 