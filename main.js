function MyComponent1(props) { //Create component 1
  const myName = 'Pedro Henrique Hoffmann da Cunha'; // Create a simple const to save a string
  return(
    <div className="component1"> 
      <MyComponent2>
          <MyComponent4 name={ myName } onClickIncrement={props.onClickIncrement} />
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
  const [ age, setAge ] = React.useState(17); // Save in Age and in setAge the value from age and a funtion to refresh value in age

  setTimeout(() => {
    setAge(18); // Refresh the value of agr to 18
  }, 2000); // Wait 1 //seconds to execute a code Block
  return(
    <div className="component-4">
      <p>My name is {props.name}!</p>
      <p>My Age is {age}!</p>
      <button type="button" onClick={ props.onClickIncrement } >Increment</button>
    </div>
  ) //Return a DIV element than contains p element with the text and variable contatenation as a content
}
function  Components(props) { //Create a main components
  return(
    <div id="components">
      <MyComponent1 onClickIncrement={props.onClickIncrement}/>
    </div>
  ) // Return a DIV element than contains MyComponent
}
function ComponentBrother(props) {
  return(
    <ComponentChildBrother clicks={props.clicks}/>
  )
}
function ComponentChildBrother(props) {
  React.useEffect(()=>{
    if(!localStorage.getItem('Clicks')){
      localStorage.setItem('Clicks', props.clicks)
    }
  })
  return(
    <span>Count: {props.clicks}</span>
  )
}
function AppComponent() {
  const [click, setClicks] = React.useState(0)

  function clickIncrements() {
    console.log('click!!!')
    setClicks(click + 1)
  }
  return(
    <React.Fragment>
      <Components onClickIncrement={clickIncrements}/>
      <ComponentBrother clicks={click}/>
    </React.Fragment>
  )
}
ReactDOM.render( //Render the components
  <AppComponent />, //Define the componet to be render
  document.querySelector('#app') //Define locale where the components will be render
)