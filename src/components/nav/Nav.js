import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to='/'><div>About</div></Link>
        <Link to='/blog'><div>Blog</div></Link>
        <Link to='/contact'><div>Contact</div></Link>
        <a href='https://trainlikeagirl.setmore.com/resourcebookingpage/r7ed71544757284692' target="_blank">Trainings</a>

      </nav>
    )
  }
}



