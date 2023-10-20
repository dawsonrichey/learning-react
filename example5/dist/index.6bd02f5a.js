const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", fh, "I'm an h1 tag"),
        React.createElement("h2", fh, "I'm an h2 tag")
    ]),
    React.createElement("div", {
        id: "child?"
    }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", f, "I'm an h2 tag")
    ])
]);
React.createElement("h1", {
    id: "heading",
    special: "mine"
}, "hello world, from dawson");
console.log(parent); //object
// console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // root.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map
