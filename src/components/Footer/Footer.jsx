import React from 'react';
import './Footer.css';
import Wave from '../../images/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{width:'100%'}} />
      <div className="f-content">
        <span>sahaavirup1998@gmail.com</span>
        <div className="f-icons">
          <Insta size='2.5rem'/>
          <Facebook size='2.5rem'/>
          <Github size='2.5rem'/>
          <LinkedIn size='2.5rem'/>
        </div>
      </div>
    </div>
  )
}

export default Footer