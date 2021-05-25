import React, {useState} from 'react'
//Let's import our styling
import './styles/app.scss';
//Let's import our components
import Nav from './Components/Nav';
import Landing from './Components/Landing';
import About from './Components/About';
import Shop from './Components/Shop';
import ProductCard from './Components/ProductCard';
//Let's import everything Router related
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  //Let's set our state


  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ProductCard} />
        </Switch>
        

        
      </div>
    </BrowserRouter>
  );
}

export default App;
