import * as React from "react";
import * as ReactDOM from "react-dom";

import HelloMessage from "./HelloMessage";

const mountNode = document.getElementById("mount");
ReactDOM.render(<HelloMessage greeting="Hello" />, mountNode);
