import React, { Component } from 'react'
import Tabs from '../../ui/Tabs'


export default class Teacher extends Component {
  render() {
    return (
      <div className='teacher-container mui-list-container'>
        <Tabs One={'Education'} Two={''} Three={''} section={'teacher'} selected={0} />
      </div>
    )
  }
}
