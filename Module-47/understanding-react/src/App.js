import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import { useEffect, useState } from 'react';
import Books from './components/Books/Books';

function App() {
  const [steps,setSteps] = useState(0);
  const books=[
    {name:'Small Giants',author:'bo'},
    {name:'Build to Sell',author:'Jhon'},
    {name:'Smash it',author:'Ray'},
    {name:'Shoe dog',author:'ko'}
  ]
  const handleIncreaseSteps = () =>{
    const newStepsCount = steps + 1;
    setSteps(newStepsCount)
  }

  useEffect( ()=>{
      console.log(steps);
  }, [steps])
  return (
    <div className="App">
      <h3>My Steps : {steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
     <Device name="Phone" steps={steps} price='13500' />
     <Books books={books}/>
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