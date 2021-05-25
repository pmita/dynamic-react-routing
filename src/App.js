import React, {useState} from 'react'
//Let's import our styling
import './styles/app.scss';
//Let's import our components
import Cards from './Components/Cards';
import items from './util_db';
//Let's import everything Router related
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  //Let's set our state
  const [products, setProducts] = useState(items);
  console.log(products);
  return (
    <div className="App">
      <h1>Test</h1>
      <Cards 
        products={products}
      />
    </div>
  );
}

export default App;
