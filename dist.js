const NameContext = React.createContext('name'); // Create a const to save a React Context

function MyComponent1() {
  //Create component 1
  const myName = 'Pedro Henrique'; // Create a simple const to save a string

  return /*#__PURE__*/React.createElement(NameContext.Provider, {
    value: myName
  }, /*#__PURE__*/React.createElement("div", {
    className: "component1"
  }, /*#__PURE__*/React.createElement(MyComponent2, null)));
}

function MyComponent2() {
  //Create component 2
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement(MyComponent3, null));
}

function MyComponent3() {
  //Create component 3
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MyComponent4, null));
}

function MyComponent4() {
  //Create component 4
  return /*#__PURE__*/React.createElement(NameContext.Consumer, null, NameContext => /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", null, "My name is ", NameContext, " and I am 17 years Old!")));
}

function Components() {
  //Create a main components
  return /*#__PURE__*/React.createElement("div", {
    id: "components"
  }, /*#__PURE__*/React.createElement(MyComponent1, null));
}

ReactDOM.render(
/*#__PURE__*/
//Render the components
React.createElement(Components, null), //Define the componet to be render
document.querySelector('#app') //Define locale where the components will be render
);
