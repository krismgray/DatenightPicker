import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Home from './Home';
import SaltLake from './SaltLake';
import Admin from './Admin';
import Provo from './Provo';
import Anywhere from './Anywhere';
import Toptab from './Toptab';
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Admin' component={Admin} />
            <Route exact path='/Provo' component={Provo} />
            <Route exact path='/SaltLake' component={SaltLake} />
            <Route exact path='/Anywhere' component={Anywhere} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default App;
