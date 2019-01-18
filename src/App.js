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
import LogRocket from 'logrocket';
// import Sentry from './ErrorHanlding'

//error tracking
if (process.env.REACT_APP_BUILD !== 'dev') {
  LogRocket.init(process.env.REACT_APP_LOGROCKET_INIT);
  LogRocket.identify('Test ID', {
    name: 'Bob',
    email: 'Saget',

    // Add your own custom user variables here, ie:
    // subscriptionType: 'pro'
  });
}
// Sentry.init({
//  dsn: "https://24ab99c4a6c54f4a8a859b85d2381de7@sentry.io/1364819"
// });

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
