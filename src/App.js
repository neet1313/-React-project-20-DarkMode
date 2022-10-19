import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movie/:id" component={Movie} />
  </Switch>
}

export default App
