import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
          <div>
          <BrowserRouter>
          <div>
            <NavLink to="/"> Home </NavLink>
            <br /><NavLink to="/notre-histoire"  activeClassName="selected" activeStyle={{fontWeight: 'bold', color: 'red'}}> History </NavLink> 
              <Switch>          
                <Route exact path="/" component={Home} />
                <Route path="/notre-histoire" component={History} />
              </Switch>
          </div>   
          </BrowserRouter>
          </div>
        );
    }
}

export default App;