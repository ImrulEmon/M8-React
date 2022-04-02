import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand='Apple' price='5000'></MyComponent>
      <MyComponent brand='Google' price='1000'></MyComponent>
      <MyComponent brand='Microsoft' price='1200'></MyComponent>
    </div>
  );
}

function LoadUsers() {
  const [users,setUsers]=useState([]);

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setUsers(data))
},[])

  return(
    <div>
      <h1>Users Loaded</h1>
      {
          users.map(user => <User name={user.name} phone={user.phone} email={user.email}></User> )
      }
    </div>
  )
}

function User(props) {
  return(
    <div className='userStyle'>
      <h2>Name : {props.name}</h2>
      <p>Phone : {props.phone}</p>
      <p>Email : {props.email}</p>
    </div>
  )
}

function MyComponent(props){
  const [points, setPoints]=useState(1);
  const myStyle={
    backgroundColor: 'lightblue',
    border:'3px solid blue',
    margin:'20px',
    padding:'10px',
    borderRadius:'5px',
  }
  const handleAddPoints = () =>{
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return(
    <div style={myStyle}>
      <h1>My own component = {props.brand}</h1>
      <p style={{fontWeight:"bold",color:'orange'}}>Component written : <span style={{color:'black'}}>{props.price}</span></p>
      <button onClick={handleAddPoints}>Add Points</button>
      <p>Pionts : {points}</p>
    </div>
  )
}
export default App;
