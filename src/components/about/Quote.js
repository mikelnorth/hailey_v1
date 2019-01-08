import React, { Component } from 'react'
import Img from "../../assets/img/rich.jpg"

export default class Quote extends Component {
  render() {
    return (
        <div className="__quote">
            {/* <h1>Full-Width, Left-Aligned</h1> */}
            <div className="testimonial-quote group">
                <img src={Img} alt="Rich Manning"/>
                <div className="quote-container">
                    <blockquote>
                        <p>Hailey has been a fantastic leader. She has scored big goals, and played any role the team needed.</p>
                    </blockquote>
                    <cite>
                        <span>Rich Manning</span><br/>
                        Head Coach<br/>
                        University of Utah
                    </cite>
                </div>
            </div>
        </div>
    )
  }
}
