import React, { Component } from 'react'
import './About.scss'
import Achievements from '../achievements/Achievements'
import Card from '../ui/Card'

// import Billboard from '../../assets/img/billboard.jpg';
import ShotImg from '../../assets/img/shot.jpg'
import Avalanche from '../../assets/img/avalanche-logo.png'
import Grad from '../../assets/img/grad.JPG'
import Quote from './Quote'

export default class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      section: 'soccer'
    }

  }

  handleClick = (section) => {
    this.setState({section})
  }

  render() {
    const cards = [
      {
        section: 'teacher',
        logo: Grad,
        title: 'Teacher',
        summary: 'Hailey has graduated from the University of Utah with a degree in early childhood development, and has been teaching in childcare centers.',
        data: 'Hailey loves to inspire and shape young lives. She has worked hard to aquire a degree from the University of Utah in childhood development and doubled majored in elementary education. She has spent the last year teaching in a child care and loves seeing young children grow and explore the world around them.'
      },
      {
        section: 'soccer',
        logo: ShotImg,
        title: 'Player',
        summary: 'Playing at the highest level of collegiate soccer, Hailey has led the Pac 12 as top goal scorer, won awards for offensive and defensive positions and lead as team captain.',
        data: 'Hailey loves to inspire and shape young lives. She has worked hard to aquire a degree from the University of Utah in childhood development and doubled majored in elementary education. She has spent the last year teaching in a child care and loves seeing young children grow and explore the world around them.'
      },
      {
        section: 'coach',
        logo: Avalanche,
        title: 'Coach',
        summary: 'Wanting to help young players reach their goals and play at the next level, Hailey has signed on as a coach and personal trainer for many aspiring athletes.'
      }
    ]
    return (
      <div id='about-container'>
          <div className='billboard'>
                <span className="divider" />Hailey S. North<span className="divider" />
          </div>
          <Quote/>
          <section id='card-section'>
            <div className='card-container'>
            {cards.map((card, i) => {
              return <Card key={`id-${i}`} {...card} handleClick={this.handleClick}/>
            })}
            </div>
          </section>
          <hr/>
            <Achievements section={this.state.section}/>
          <hr />
        {/* <div className='card-container'>
          {cards2.map((card, i) => {
            return <Card key={`id2-${i}`} {...card}/>
          })}
        </div> */}

      </div>
    )
  }
}
