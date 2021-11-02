import React from 'react';
import { Router, Switch , useParams} from 'react-router';
import Home from './components/Home';
import Nav from './components/Nav';
import Contact from './components/Contact';
import About from './components/About';
import Cards from './components/Cards';
import Card from './components/Card'
import './App.css';

function App() {
  return (
    <>
    <Nav />
    <Switch >
    <Router exact path="/Home" component={Home} />
    <Router exact path="/Contact" component={Contact} />
    <Router exact path="/About" component={About} />
    <Router exact path="/Cards" component={Cards} />
    <Router exact path="/Home" component={Card} />
    </ Switch >
    </>
    
  );
}

export default App;
