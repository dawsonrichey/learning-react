import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
<h1 className="head" tabIndex="5">
Namaste React using JSX
</h1>
);


// Component Composition
const HeadingComponent = () => (
    <div className="container">
        <h1 className="headng">Namaste React Fucntional Component</h1>
        <Title />
    </div>

);


// Class Based Component - OLD
// Functional Component - NEW




const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);
