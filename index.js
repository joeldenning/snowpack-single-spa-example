import * as React from "react";
import * as ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import singleSpaCss from "single-spa-css";
import HelloWorld from "./HelloWorld.jsx";

const staticBase =
  typeof __webpack_public_path__ !== "undefined"
    ? __webpack_public_path__
    : import.meta.url.slice(0, import.meta.url.lastIndexOf("/") + 1);

const cssLifecycles = singleSpaCss({
  cssUrls: [staticBase + "index.css"],
});

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: HelloWorld,
});

export const bootstrap = [cssLifecycles.bootstrap, reactLifecycles.bootstrap];

export const mount = [cssLifecycles.mount, reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount, cssLifecycles.unmount];
