import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement (render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

console.log(heading);

// JSX (transpiled before it reaches the JS) - PARCEL - Babel
const jsxHeading = <h1 id="heading" className="new">dfgdfgdf</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
