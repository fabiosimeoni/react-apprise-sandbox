import * as React from "react";
import { render } from "react-dom";

import { App, Scaffold } from "./lib/components";
import { state } from "./state";
import { scaffold } from "./components/scaffold"

render(<App initState={state}>
    <Scaffold model={scaffold}>
    </Scaffold>
  </App>
, document.getElementById("root"));
