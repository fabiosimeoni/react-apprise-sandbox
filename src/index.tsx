import * as React from "react";
import { render } from "react-dom";

import { App } from "./lib/components";
import { Main } from "./components/Main";
import { initialState } from "./state";

render(<App initState={initialState}>
    <Main />
  </App>
, document.getElementById("root"));
