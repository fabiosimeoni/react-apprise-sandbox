import * as React from "react";
import { render } from "react-dom";

import { App } from "./lib/components";
import { Main } from "./components";

render(
  <App>
    <Main />
  </App>,
  document.getElementById("root")
);
