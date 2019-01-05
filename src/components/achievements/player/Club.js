import React, { Component } from 'react'

export default class HighSchool extends Component {
    render() {
        const awards = [
            {
                dates: '2009, 2012',
                award: 'Utah State Cup Quarter Finalist',
            },
            {
                dates: '2010',
                award: 'Utah State Cup Champion',
            },
            {
                dates: '2010',
                award: 'Presidents Day Tournament Semi-Finalist',
            },
            {
                dates: '2011, 2014',
                award: 'Utah State Cup Semi-Finalist',
            },
            {
                dates: '2013, 2014',
                award: 'ECNL Rocky Mountain PDP',
            },
            {
                dates: '2013',
                award: 'ECNL All-Event Team San Diego',
            },
            {
                dates: '2013',
                award: 'Puma Womens Elite Showcase',
            },
            {
                dates: '2013',
                award: 'ECNL/id2 National Training Camp',
            },
            {
                section: 'ODP Honors'
            },
            {
                dates: '2009, 2010, 2011, 2012, 2013',
                award: 'Utah ODP 97 State Team',
            },
            {
                dates: '2010, 2011, 2012, 2013',
                award: 'Utah ODP 97 Team Captain',
            },
            {
                dates: '2010, 2011, 2012, 2013',
                award: 'Region IV 97 ODP Camp',
            },
            {
                dates: '2011, 2012, 2013',
                award: 'Region IV 97 ODP Region Pool',
            },
            {
                dates: '2011, 2012',
                award: 'US Soccer Training Center',
            },
            {
                dates: '2012',
                award: 'Region IV 97 ODP Championships All Tournament 2nd Team',
            },
            {
                dates: '2012, 2013',
                award: 'US Youth Soccer National Development Camp',
            },
            {
                dates: '2012, 2013',
                award: 'Region IV ODP Costa Rica Team',
            },
            {
                dates: '2013',
                award: 'Region IV 97 ODP ThanksgivingInter-regional Team',
            },
            {
                dates: '2014',
                award: 'Region IV ODP Championships Best 18',
            },


        ]
        return (
            <div className="highschool-container">
                {awards.map((award, i) => {
                    if (award.section) {
                       return <div className='award' key={i}>
                            <span className='section'>{award.section}</span>
                        </div>
                    }else{
                        return <div className='award' key={i}>
                                <span className='left'>{award.dates}</span>
                                <span className='right'>{award.award}</span>
                        </div>
                    }
                })}
            </div>
        )
    }
}
