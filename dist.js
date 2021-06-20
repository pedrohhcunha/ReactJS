const NameContext = React.createContext('name'); // Create a const to save a React Context

function MyComponent1() {
  //Create component 1
  const myName = 'Pedro Henrique'; // Create a simple const to save a string

  return /*#__PURE__*/React.createElement(NameContext.Provider, {
    value: myName
  }, /*#__PURE__*/React.createElement("div", {
    className: "component1"
  }, /*#__PURE__*/React.createElement(MyComponent2, null))); // Return a context and a DIV element than contains MyComponent
}

function MyComponent2() {
  //Create component 2
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement(MyComponent3, null)); // Return a DIV element than contains MyComponent 3
}

function MyComponent3() {
  //Create component 3
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MyComponent4, null)); // Return a DIV element than contains MyComponent 4
}

function MyComponent4() {
  //Create component 4
  return /*#__PURE__*/React.createElement(NameContext.Consumer, null, NameContext => /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", null, "My name is ", NameContext, " and I am 17 years Old!"))); //Return a DIV element than contains p element with the text and variable contatenation as a content
}

function Components() {
  //Create a main components
  return /*#__PURE__*/React.createElement("div", {
    id: "components"
  }, /*#__PURE__*/React.createElement(MyComponent1, null)); // Return a DIV element than contains MyComponent
}

ReactDOM.render(
/*#__PURE__*/
//Render the components
React.createElement(Components, null), //Define the componet to be render
document.querySelector('#app') //Define locale where the components will be render
);
