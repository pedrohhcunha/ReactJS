function MyComponent1() { //Create component 1
  const myName = 'Pedro Henrique Hoffmann da Cunha'; // Create a simple const to save a string
  return(
    <div className="component1"> 
      <MyComponent2>
        <MyComponent4 name={ myName } />
      </MyComponent2>
    </div>
  ) // Return a DIV element than contains MyComponent 2 and set wour children as MyComponent 4 with name=myName"
}
function MyComponent2(props) { //Create component 2
  return (
    <div className="component-2">{props.children}</div>
  ) // Return a DIV element than contains the children element recived from father element
}
function MyComponent3() { //Create component 3
  return (
    <div className="component-3">
      <MyComponent4/>
    </div>
  ) // Return a DIV element than contains MyComponent 4
}
function MyComponent4(props) { //Create component 4
  return(
    <div className="component-4">
      <p>
        My name is {props.name} and I am 17 years Old!
      </p>
    </div>
  ) //Return a DIV element than contains p element with the text and variable contatenation as a content
}
function  Components() { //Create a main components
  return(
    <div id="components">
      <MyComponent1/>
    </div>
  ) // Return a DIV element than contains MyComponent
}
ReactDOM.render( //Render the components
  <Components/>, //Define the componet to be render
  document.querySelector('#app') //Define locale where the components will be render
)