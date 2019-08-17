import * as React from "react";
import { render } from "react-dom";

import { App, Scaffold } from "./lib/components";
import { state } from "./state";
import { scaffold } from "./components/scaffold"
import { mockery } from "./mockery"
import { Button } from "antd";



// render(<App initState={state} mockery={mockery}>
//     <Scaffold model={scaffold}/>
//   </App>
// , document.getElementById("root"));


render(<Button>sdsadsa</Button>
, document.getElementById("root"));
