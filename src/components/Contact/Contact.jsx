import React, { useState,useRef, useContext} from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7mg7wfi', 'template_ipfg4hw', form.current, '-feA8vhb6DVA7DKDo')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode ? 'grey' : ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder ="Name" />
                <input type="email" name="user_email" className="user" placeholder ="Email" />
                <textarea name="message" className="user" placedholder="Message" />
                <input type="submit" value="send" className="button" />
                <span>{done && "Thanks for Contacting me"}</span>
                <div className="blur c-blur" style={{ background: "var(--purple)" }}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact