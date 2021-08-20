import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </Router>
  )
}

export default Routes;
