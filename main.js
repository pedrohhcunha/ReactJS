const NameContext = React.createContext('name'); // Create a const to save a React Context
function MyComponent1() { //Create component 1
  const myName = 'Pedro Henrique'; // Create a simple const to save a string
  return(
    <NameContext.Provider value={ myName }> 
      <div className="component1"> 
        <MyComponent2/>
      </div>
    </NameContext.Provider>
  ) // Return a context and a DIV element than contains MyComponent
}
function MyComponent2() { //Create component 2
  return (
    <div className="component-2">
      <MyComponent3/>
    </div>
  ) // Return a DIV element than contains MyComponent 3
}
function MyComponent3() { //Create component 3
  return (
    <div className="component-3">
      <MyComponent4/>
    </div>
  ) // Return a DIV element than contains MyComponent 4
}
function MyComponent4() { //Create component 4
  return(
    <NameContext.Consumer>
      {(NameContext) => (
        <div className="component-4">
          <p>
            My name is {NameContext} and I am 17 years Old!
          </p>
        </div>
      )}
    </NameContext.Consumer>
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