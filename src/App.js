import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'

function App() {
  // Function to clear complete cache data
  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
  };

  setInterval(() => {
    clearCacheData()
    console.log("Cache Cleared")
  }, 300000);

  return <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movie/:id" component={Movie} />
  </Switch>
}

export default App
