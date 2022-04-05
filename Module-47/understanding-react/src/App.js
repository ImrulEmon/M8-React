import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import { useEffect, useState } from 'react';

function App() {
  const [steps,setSteps] = useState(0);
  const handleIncreaseSteps = () =>{
    const newStepsCount = steps + 1;
    setSteps(newStepsCount)
  }

  useEffect( ()=>{

  }, [steps])
  return (
    <div className="App">
      <h3>My Steps : {steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
     <Device name="Phone" price='13500' />
    </div>
  );
}

export default App;

{/* <p>npm =  Node Package Manager</p>
<hr />
<p>cli = command line interface</p>
<hr />
<p>Webpack,babel,settings</p>
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */}