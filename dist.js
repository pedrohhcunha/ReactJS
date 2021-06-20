function MyComponent1() {
  //Create component 1
  const myName = 'Pedro Henrique Hoffmann da Cunha'; // Create a simple const to save a string

  return /*#__PURE__*/React.createElement("div", {
    className: "component1"
  }, /*#__PURE__*/React.createElement(MyComponent2, null, /*#__PURE__*/React.createElement(MyComponent4, {
    name: myName
  }))); // Return a DIV element than contains MyComponent 2 and set wour children as MyComponent 4 with name=myName"
}

function MyComponent2(props) {
  //Create component 2
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, props.children); // Return a DIV element than contains the children element recived from father element
}

function MyComponent3() {
  //Create component 3
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MyComponent4, null)); // Return a DIV element than contains MyComponent 4
}

function MyComponent4(props) {
  //Create component 4
  const [age, setAge] = React.useState(17); // Save in Age and in setAge the value from age and a funtion to refresh value in age

  setTimeout(() => {
    setAge(18); // Refresh the value of agr to 18
  }, 2000); // Wait 1 //seconds to execute a code Block

  return /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", null, "My name is ", props.name, "!"), /*#__PURE__*/React.createElement("p", null, "My Age is ", age, "!")); //Return a DIV element than contains p element with the text and variable contatenation as a content
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
