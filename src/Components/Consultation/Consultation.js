import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import '../Consultation/Consultation.css'
import smImg from '../Images/sm-contact.svg'
import lgImg from '../Images/lg-contact.svg'
// import FormSubmitBtn from '../Buttons/FormSubmitBtn'
// import { gsap } from 'gsap'
// import { ScrollTrigger} from 'gsap/all';

const Consultation = (props) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('clearcreations', 'contactForm', form.current, '3VoYYe1WsgxtLt4Jl')
        .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
    }
    
    return(
        <div className="container contact">
            <div className="contact-left">
                <div className="contact-text">
                    <h2>Ready For Clarity?</h2>
                    <p className="body-lg">
                        Whether you know where to start or are completely clueless, we're here to help. 
                        Get in touch with us about your new project below or send us a quick message.
                    </p>
                </div>
                <form ref={form} onSubmit={sendEmail}>
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
                    {/* <div className="submit-btn">
                        <FormSubmitBtn />
                    </div> */}
                    <input className='submit' type="submit" value="Send" />
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