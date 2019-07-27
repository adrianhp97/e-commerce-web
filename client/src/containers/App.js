import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'


import Home from './Home'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  </div>
)

export default App