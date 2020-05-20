import React, { Component } from 'react'
import './Contact.scss'

import { Link } from 'react-router-dom'


export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container bg-contact2" style={{ backgroundImage: "url('../../assets/img/bg-01.jpg')" }}>
        <div className="container-contact2">
          <div className="wrap-contact2">
            <form className="contact2-form validate-form" action="https://formspree.io/haileysnorth@gmail.com" method="POST">
              <span className="contact2-form-title">
                Contact Me
					    </span>
              <span className='small'>If you want to schedule a training, please <Link to='/'>Click Here</Link></span>

              <div className="wrap-input2 validate-input" data-validate="Name is required">
                <input className="input2" type="text" name="name" />
                <span className="focus-input2" data-placeholder="NAME"></span>
              </div>

              <div className="wrap-input2 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input2" type="text" name="email" />
                <span className="focus-input2" data-placeholder="EMAIL"></span>
              </div>
              <div className="wrap-input2 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input2" type="text" name="phone" />
                <span className="focus-input2" data-placeholder="PHONE"></span>
              </div>

              <div className="wrap-input2 validate-input" data-validate="Message is required">
                <textarea className="input2" name="message"></textarea>
                <span className="focus-input2" data-placeholder="MESSAGE"></span>
              </div>

              <div className="container-contact2-form-btn">
                <div className="wrap-contact2-form-btn">
                  <div className="contact2-form-bgbtn"></div>
                  <button className="contact2-form-btn">
                    Send Your Message
							</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
