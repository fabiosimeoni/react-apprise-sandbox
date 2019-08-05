import { BaseState, change } from "../state"
import { Config } from "./model";
import axios from "axios"
import { notification } from "antd";

const get = (state:BaseState) => () => state.config
const set = (state:BaseState) => (c: Config) => change(state).with( s => s.config = c )

const isDefined = (state:BaseState) => () => state.config !== undefined

const configPath="config.json"

const fetch = (state:BaseState) => () => {

  console.log("loading configuration...")
  return axios.get<Config>(configPath)
             .then(r=> { set(state)(r.data); return r.data})
             .then(c=>notification['success']({
    message: `Loaded configuration (${c.sampleproperty})`
  }))
}

export const configapi = (s: BaseState ) => ({

  isDefined: isDefined(s),
  get : get(s),
  fetch: fetch(s)
  
}) 