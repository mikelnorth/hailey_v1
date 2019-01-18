import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.scss';
import { Switch, Route } from "react-router-dom";
import Nav from './components/nav/Nav';
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'
import Trainings from './components/trainings/Trainings'
import MobileNav from './components/nav/MobileNav';
import NotFound from './NotFound';
import * as Sentry from '@sentry/browser';


import helpers from './helpers';



//error tracking
helpers.setCookie()
// if (process.env.REACT_APP_BUILD !== 'dev') {
  helpers.initLogRocket()
  helpers.initSentry(Sentry)
// }


// Raven.config(sentry_url).install();
class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          <Nav />
          <MobileNav/>
        </>
        <Switch>
          <Route component={About} exact path='/' />
          <Route component={Blog} exact path='/blog' />
          <Route component={Contact} path='/contact' />
          <Route component={Trainings} path='/trainings' />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
