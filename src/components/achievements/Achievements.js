import React, { Component } from 'react'
import Soccer from './player/Soccer'
import Teacher from './teaching/Teacher'
import Coach from './coaching/Coach'
import './Achievements.scss'

export default class Achievements extends Component {
  constructor(props){
    super(props);
    this.state = {
      section: 'teacher',
      tab: 2
    }
  }

  componentDidMount(){
    this.setState({section:this.props.section})
  }

  componentWillReceiveProps(newProps){
    this.setState({section: newProps.section})
  }

  updateState = (key, value) => {
    this.setState({ [key]: value })
  }

  loadComponent = () => {
    switch (this.state.section) {
      case 'soccer':
        return <Soccer updateState={this.updateState}/>
      case 'teacher':
        return <Teacher />
      case 'coach':
        return <Coach />
      default:
        return <Soccer />
    }
  }

  render() {
    return (
      <section id='achievements'>
        {this.loadComponent()}
        {(this.state.tab === 2 && this.state.section === 'soccer') ?
        <>
          <div className='description'>
            <hr/>
                <iframe className='video-container' title={'Highlight Video'} src={`https://www.youtube.com/embed/JKSa0oMvQ2w?color=white&showinfo=0&rel=0`} frameBorder="0" allowFullScreen={true}></iframe>
            <p>
            During Hailey's collegiate career she has played many important roles. After a great start her freshman year, starting every game, she ended the season early
            with an ACL injury. <br/><br/> After recovery and into her sophomore year she jumped right back with a move from her center back position to center forward to become the Pac 12 leading goal scorer.<br/><br/>
            Hailey Continued into her Junior year as an attacking force that lead the team. Her Senior year took her back to playing center back as a string of injury's left the
            team seeking solidity in the back line. <br/><br/> Hailey rose to the task and passed with flying colors, becoming the first in program history to be honored with all conference mentions as both a forward and defender.
            </p>
          </div>
          </> : null
        }
      </section>
    )
  }
}
