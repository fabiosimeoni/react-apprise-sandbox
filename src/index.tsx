import * as React from "react";
import { render } from "react-dom";

import { App } from "./lib/components";
import { Main } from "./components/Main";
import { initialModel } from "./state";

render(<App model={initialModel} main={Main} />, document.getElementById("root"));
