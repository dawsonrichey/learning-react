const heading = React.createElement("h1", {id:"heading", special:"mine"}, "hello world, from dawson");

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);