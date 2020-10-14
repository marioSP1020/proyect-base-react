import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home.js';
import ErrorPage from '../pages/Error.js';

// UI components

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
