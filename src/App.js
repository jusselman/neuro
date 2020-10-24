import React from 'react';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() =>
          <Home
          />
        } />
        <Route exact path='/about' render={() =>
          <About
          />
        } />
      </Switch>
    </div>
  );
}

export default App;
