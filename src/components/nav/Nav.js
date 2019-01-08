import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className='left'>

        </div>
        <div className='middle'>
          <Link to='/'><div>About</div></Link>
          <Link to='/blog'><div>Blog</div></Link>
          <Link to='/contact'><div>Contact</div></Link>
          <a href='https://trainlikeagirl.setmore.com/resourcebookingpage/r7ed71544757284692' rel="noopener noreferrer" target="_blank">Trainings</a>
        </div>
        <div className='right'>
          <a href="https://www.instagram.com/haileyskol.north/?hl=en" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram instagram" /></a>
          <a href="https://twitter.com/soccer30girl" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter-square twitter" /></a>
          <a href="https://www.youtube.com/channel/UC-tQNJMwd7UIZgrJKbLMZEw" rel="noopener noreferrer" target="_blank"><i className="fab fa-youtube youtube" /></a>
        </div>
      </nav>
    )
  }
}



