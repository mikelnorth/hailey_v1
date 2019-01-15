import React, { Component } from 'react'

export default class HighSchool extends Component {
    render() {
        const awards = [
            {
                section: 'Senior Year - 2018'
            },
            {
                dates: "2018",
                award: "Third Team All Pac-12 as defender",
            },
                        {
                dates: "2018",
                award: "Pac-12 All-Academic First Team Selection",
            },
            {
                dates: "2018",
                award: "United Soccer Coaches All-Pacific Region Third Team",
            },
            {
                dates: "2018",
                award: "CoSIDA Academic All-Distric First Team",
            },
            {
                dates: "2018",
                award: "United Soccer Coaches NCAA Division I Womens's Scholar All-West Region Third Team",
            },
            {
                dates: "2018",
                award: "Team Captian",
            },
            {
                section: 'Junior Year - 2017'
            },
            {
                dates: "2017",
                award: "Named to 2017 MAC Herman Watch List",
            },
            {
                dates: "2017",
                award: "CoSIDA Academic All–District First Team",
            },
            {
                dates: "2017",
                award: "Pac-12 All-Academic First Team selection",
            },
            {
                dates: "2017",
                award: "Tied for the team lead with eight goals",
            },
            {
                dates: "2017",
                award: "Played in every game for the Utes",
            },
            {
                dates: "2017",
                award: "Scored four goals and accrued nine points vs. North Dakota State to match Amy Kofoed's program marks set in 2001",
            },
            {
                dates: "2017",
                award: "11th hat trick in Utah history and first since Lauren Field vs. Baylor in 2003",
            },
            {
                section: 'Sophomore Year - 2016'
            },
            {
                dates: "2016",
                award: "Pac 12 Top Goal Scorer",
            },
            {
                dates: "2016",
                award: "Selected to U-23 Women’s National Team",
            },
            {
                dates: "2016",
                award: "NSCAA All-Pacific Region First Team",
            },
            {
                dates: "2016",
                award: "First Team All Pac-12 - First In Program History",
            },
            {
                dates: "2016",
                award: "CoSIDA Academic All-District",
            },
            {
                dates: "2016",
                award: "Pac-12 All-Academic First Team",
            },
            {
                dates: "2016",
                award: "Pac-12 Offensive Player of the Week on two occasions (Aug. 30 and Oct. 11) - First In Program History",
            },
            {
                dates: "2016",
                award: "13 goals ranked 25th in the nation",
            },
            {
                dates: "2016",
                award: "seven game-winning goals ranked seventh in the nation",
            },
            {
                dates: "2016",
                award: "started every game for the Utes",
            },
            {
                section: 'Freshman Year - 2015'
            },
            {
                dates: "2015",
                award: "first career goal earned the team a tie vs. Loyola Marymount ",
            },
            {
                dates: "2015",
                award: "Started all 14 games in defense before suffering a season-ending injury",
            },
        ]
        return (
            <div className="highschool-container">
                {awards.map((award, i) => {
                    if (award.section) {
                        return <div className='award' key={i}>
                            <span className='section'>{award.section}</span>
                        </div>
                    } else {
                        return <div className='award' key={i}>
                            {/* <span className='left'>{award.dates}</span> */}
                            <span className='center'>{award.award}</span>
                        </div>
                    }
                })}
            </div>
        )
    }
}
