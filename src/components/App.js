import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
//UI componets
import Header from '../components/Header';
import Footer from '../components/Footer';



// pages
import Home from '../pages/Home.js';
import ErrorPage from '../pages/Error.js';




function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/*" component={ErrorPage} />
          
        </Switch>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
