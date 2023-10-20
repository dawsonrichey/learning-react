import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
<h1 className="head">
Namaste React using JSX</h1>
);


// React Functional Component
const HeadingComponent = () => {
    return <h1>Namaste React Fucntional Component</h1>;
};

// Class Based Component - OLD
// Functional Component - NEW




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
