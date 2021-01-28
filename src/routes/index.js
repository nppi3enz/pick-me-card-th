import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import { GuessWord, GuessWordAdmin, GuessWordPresent } from '../pages/GuessWord'
import NotFound from '../pages/NotFound'

const Routes = (props) => (
  <Switch {...props}>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/guessword" component={GuessWord} />
    <Route path="/guessword/present" component={GuessWordPresent} />
    <Route path="/guessword/admin" component={GuessWordAdmin} />
    <Route path="*" component={NotFound} />
  </Switch>
);
export default Routes;