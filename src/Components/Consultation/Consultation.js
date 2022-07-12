import {useEffect, useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser'
import '../Consultation/Consultation.css'
import smImg from '../Images/sm-contact.svg'
import lgImg from '../Images/lg-contact.svg'
import LetsChatBtn from '../Buttons/LetsChatBtn'

const Consultation = (props) => {
    return(
        <div className="container contact">
            <div className="contact-left">
                <div className="contact-text">
                    <h2>Ready For Clarity?</h2>
                    <p className="body-lg">
                        Whether you know where to start or are completely clueless, we are here to help. 
                        Get in touch with us about your new project below or send us a quick message.
                    </p>
                </div>
                <form action="#">
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" name='name' id='name' required />
                            <div className="underline"></div>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-data">
                            <input type="text" name='company' id='company' required />
                            <div className="underline"></div>
                            <label htmlFor="company">Company Name</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="email" name='email' id='email' required />
                            <div className="underline"></div>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-data">
                            <input type="text" name='phone' id='phone' required />
                            <div className="underline"></div>
                            <label htmlFor="phone">Phone</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea name="message" id="message" required></textarea>
                            <div className="underline"></div>
                            <label htmlFor="message">Message</label>
                        </div>
                    </div>
                    <div className="submit-btn">
                        <LetsChatBtn />
                    </div>
                </form>
            </div>
            <div className="contact-right">
                <img src={lgImg} className='lg-img'/>
                <img src={smImg} className='sm-img'/>
                {/* <div className="lg-circle"></div>
                <div className="sm-circle"></div> */}
            </div>
        </div>
    )
}

export default Consultation;