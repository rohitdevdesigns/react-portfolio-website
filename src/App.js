import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import About from './About';

const App = () => {
  return (
   <>
   <Navbar />

   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About} />
     </Switch>
   </>
    
  );
};

export default App;
