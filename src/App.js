import React from 'react';
// eslint-disable-next-line
import { Route, Switch , useParams } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
 import Favorit from './components/Favorit';
 import About from './components/About';

 import Card from './components/Card'
import './App.css';

function App() {
  return (
    <>

    <Nav />
    <Switch >
    <Route exact path="/Home" component={Home} />
    <Route exact path="/Favorit" component={Favorit} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Card/:id" component={Card} />
    <Route path="*" render={()=>{return <h1>404</h1>}} />
    </ Switch >
    </> 
    
  );
}

export default App;
