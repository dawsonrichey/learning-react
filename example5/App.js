import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement ("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "HEllo"),
    React.createElement("h2", {}, "I'm an h2 tag"),
]),
    React.createElement("div", { id: "child?" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
]),
]);

React.createElement("h1", {id:"heading", special:"mine"}, "hello world, from dawson");

console.log(parent); //object
// console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
// root.render(heading);