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


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          <MobileNav/>
        </header>
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
