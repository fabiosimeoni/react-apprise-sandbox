import * as React from "react";
import { render } from "react-dom";

import { App, Scaffold } from "./lib/components";
import { Main } from "./components/Main";
import { initialState } from "./state";
import { scaffold } from "./components/scaffold"

render(<App initState={initialState}>
    <Scaffold model={scaffold}>
      {/* to remove, model will instruct scaffold.  */}
      <Main /> 
    </Scaffold>
  </App>
, document.getElementById("root"));
