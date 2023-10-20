import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
<h1 className="head" tabIndex="5">
Namaste React using JSX
</h1>
);

const number = 10000;

// const data = api.getData();

// Component Composition
const HeadingComponent = () => (
    <div className="container">
        {/* {data} */}
        {Title()}
        <h1 className="headng">Namaste React Fucntional Component</h1>
        <Title />
    </div>

);


// Class Based Component - OLD
// Functional Component - NEW




const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);
