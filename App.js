const heading = React.createElement("div", { id: 'parent' },
    [
        React.createElement("div", { id: 'div1' }),
        [
            React.createElement("h1", {}, "H1 Tag"),
            React.createElement("h2", {}, "H2 Tag")
        ],
        React.createElement("div", { id: 'div2' }),
        [
            React.createElement("h1", {}, "H1 Tag"),
            React.createElement("h2", {}, "H2 Tag")
        ]
    ]
);

console.log(heading); // Object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading); 