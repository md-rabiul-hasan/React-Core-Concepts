import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {
      name : 'Adobe',
      price : '$29'
    },
    {
      name : 'VS Code',
      price : '$39'
    },
    {
      name : 'Phpstrom',
      price : '$5'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>My Hero List</p>
        <Counter></Counter>
        <Users></Users>
        <div className="row">
          {
            products.map(product => <Product product={product}></Product> )
          }
        </div>
          
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[]);
  return(
    <div>
      <h3>Dynamic Users</h3>
      <hr />
        {
          users.map(user => <li>{user.name}</li>)
        }
      <hr />
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0)
  return(
    <div>
      <h3>Count : {count}</h3>
      <button onClick={ () => setCount(count + 1) } >Increase</button>
      <button onClick={ () => setCount(count - 1) } >Decrease</button>
    </div>
  )
}

function Product(props){
  console.log(props)
  return(
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.product.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.product.price}</h6>          
        </div>
      </div>
    </div>
  )
}

export default App;
