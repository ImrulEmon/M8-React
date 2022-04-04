import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';

function App() {
  return (
    <div className="App">
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