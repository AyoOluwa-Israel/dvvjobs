import React from 'react';
import './App.scss';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';


function App() {
  return (
    
      <Router>
        <Home/>
          <Switch>
            <Route path = '/' exact component={Home}/>
            <Route path='/Login' component = {Login}/>
            <Route path='/register' component = {Register}/>
          </Switch>
      </Router>
      

  );
}

export default App;
