const Items = () => {
  return React.createElement(
    React.Fragment, 
    null,
    React.createElement("li", null, "First element"),
    React.createElement("li", null, "Second element"),
    React.createElement("li", null, "Third element")
  );
};

ReactDOM.render(Items(), document.querySelector('#___gatsby'));