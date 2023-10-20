import React from "react";
import ReactDOM from "react-dom/client";



const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
console.log(heading);


// JSX - HTML like or XML like  - is not HTML in JS
const jsxHeading = <h1 id="heading">dfgdfgdf</h1>;
console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(jsxHeading);