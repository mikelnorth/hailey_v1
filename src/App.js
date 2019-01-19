import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.scss';

// import logo from './logo.svg';
//import routes
import Nav from './components/nav/Nav';
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'
import Trainings from './components/trainings/Trainings'
import MobileNav from './components/nav/MobileNav';
import NotFound from './NotFound';


// import uitils
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

  // componentDidMount(){
    // window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      // e.preventDefault();
      // Stash the event so it can be triggered later.
      // let deferredPrompt = e;
      // Update UI notify the user they can add to home screen
      // btnAdd.style.display = 'block';
    // });
  // }

  render() {
    return (
      <div className="App">
        <>
          <Nav />
          <MobileNav />
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
