import * as React from "react";
import { render } from "react-dom";

import { App } from "./lib/components";
import { Main } from "./components/Main";
import { initialBaseState } from "./state";

render(<App model={initialBaseState} main={Main} />, document.getElementById("root"));
