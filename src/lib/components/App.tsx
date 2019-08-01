import * as React from "react";

import "./styles.css";

// HOC to boostrap and uniformly style an application
export const App = props => {
  return <div className="App">{props.children}</div>;
};

