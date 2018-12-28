import React, { Component } from 'react'
import Tabs from '../ui/Tabs'


export default class Soccer extends Component {
  render() {
    return (
      <div className='soccer-container'>
        <Tabs One={'HighSchool'} Two={'Club'} Three={'College'} section={'soccer'} selected={2} updateState={this.props.updateState}/>
        {/* <div className="tab">HighSchool</div>
        <div className="tab">Club</div>
        <div className="tab">Collegiate</div> */}
      </div>
    )
  }
}
