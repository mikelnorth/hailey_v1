import React, { Component } from 'react'

export default class HighSchool extends Component {
  render() {
      const awards = [
          {
              dates: '2011, 2012, 2013, 2013',
              award: 'Riverton High School Varsity Starter',
          },
          {
              dates: '2011, 2012, 2013, 2014',
              award: 'Riverton High School Varisty Letter',
          },
          {
              dates: '2011',
              award: 'UHSAA Region 4 2nd Team',
          },
          {
              dates: '2011',
              award: 'Salt Lake Tribune UHSAA All State Honorable Mention',
          },
          {
              dates: '2012, 2013, 2014',
              award: 'UHSAA Region 4 1st Team',
          },
          {
              dates: '2012, 2013, 2014',
              award: 'Deseret News UHSAA All State 4 1st Team',
          },
          {
              dates: '2012, 2013, 2014',
              award: 'Salt Lake Tribune UHSAA All State 4 1st Team',
          },
          {
              dates: '2013, 2014',
              award: 'UHSAA Region 4 MVP Forward',
          },
          {
              dates: '2013',
              award: 'Salt Lake Tribune All Tribune Team',
          },
          {
              dates: '2014',
              award: 'Deseret News High School Prep of the Week',
          },
          {
              dates: '2014',
              award: 'MaxPreps/NSCAA - Player of the Week',
          },
          {
              dates: '2014',
              award: 'TopDrawerSoccer All-State Team and All-Region Team',
          },
          {
              dates: '2014',
              award: 'High School All-American Game Participant',
          },
          {
              dates: '2014',
              award: 'Utah Gatorade Player of the Year',
          },
          {
              dates: '2014',
              award: 'UHSAA Academic All-State',
          },
          {
              dates: '2014',
              award: 'Cumulative 4.0 GPA',
          },
      ]
    return (
      <div className="highschool-container">
        {awards.map((award, i)=> {
            return <div className='award' key={i}>
                <span className='left'>{award.dates}</span>
                <span className='right'>{award.award}</span>
            </div>
        })}
      </div>
    )
  }
}
