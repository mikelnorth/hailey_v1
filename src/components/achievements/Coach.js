import React, { Component } from 'react'
import Tabs from '../ui/Tabs'


export default class Coach extends Component {
  render() {
    return (
      <div className='soccer-container'>
        <Tabs One={'Experience'} Two={'Trainings'} section={'coach'} selected={0}/>
        {/* <div className="tab">HighSchool</div>
        <div className="tab">Club</div>
        <div className="tab">Collegiate</div> */}
      </div>
    )
  }
}
