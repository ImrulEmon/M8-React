import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponent brand='Apple' price='5000'></MyComponent>
      <MyComponent brand='Google' price='1000'></MyComponent>
      <MyComponent brand='Microsoft' price='1200'></MyComponent>
    </div>
  );
}
function MyComponent(props){
  const myStyle={
    backgroundColor: 'lightblue',
    border:'3px solid blue',
    margin:'20px',
    padding:'10px',
    borderRadius:'5px'
  }
  return(
    <div style={myStyle}>
      <h1>My own component = {props.brand}</h1>
      <p style={{fontWeight:"bold",color:'orange'}}>Component written : <span style={{color:'black'}}>{props.price}</span></p>
    </div>
  )
}
export default App;
