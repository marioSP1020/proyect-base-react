import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home.js';
import Error from '../pages/Error.js';

// UI components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Article from '../components/Article';

function App() {
  return (
    <div className="app">
       <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/*" component={Error} />
        </Switch>
        <Article/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
