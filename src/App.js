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
// import Sentry from './ErrorHanlding'
//import components

// import utilities
import LogRocket from 'logrocket';

//error tracking
LogRocket.init('82lcwx/hailey_v1');
LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
  name: '',
  email: '',

  // Add your own custom user variables here, ie:
  // subscriptionType: 'pro'
});
// Sentry.init({
//  dsn: "https://24ab99c4a6c54f4a8a859b85d2381de7@sentry.io/1364819"
// });



class App extends Component {

  componentDidMount(){
    var deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can add to home screen
      // btnAdd.style.display = 'block';
    });
  }

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
