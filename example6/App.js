import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
<h1 className="head">
Namaste React using JSX</h1>
);


// React Functional Component
const HeadingComponent = () => (
<h1 className="headng">Namaste React Fucntional Component</h1>
);


// Class Based Component - OLD
// Functional Component - NEW




const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);
