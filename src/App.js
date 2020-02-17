import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router , Route, Switch, Link} from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'

class App extends Component {
  render(){
    return(
      <Router>
        <h2 className="heading1">
          Learning React Router
        </h2>
        {/* navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto" id="list">
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
          </ul>
        </nav>
        <hr />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
    )
  }
}


export default App;
