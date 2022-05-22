import React,{useContext} from 'react'
import "./Intro.css";
import Github from '../../images/github.png';
import LinkedIn from '../../images/linkedin.png';
import Instagram from '../../images/instagram.png';
import Vector1 from '../../images/Vector1.png';
import Vector2 from '../../images/Vector2.png';
// import Boy from '../../images/boy.png';
import ThumbUp from '../../images/thumbup.png';
import Crown from '../../images/crown.png';
import Glassesimoji from '../../images/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Selfpic from '../../images/self_pic.jpg';
import {themeContext} from '../../Context'
import {motion} from 'framer-motion';

function Intro() {

  const transition = {duration : 2, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode ? 'grey' : ''}}>Hy! I am</span>
                <span>Avirup Saha</span>
                <span>Frontend Developer with nearly one year of experience in Email Development and webdesigning and develpment. Also have knowledge in UI/UX designing.</span>
            </div>
            <buton className="button i-button">Hire me</buton>
            <div className="i-icons">
                <a href='https://github.com/sahaavirup1998?tab=repositories'><img src={Github} alt="github"/></a>
                <a href='https://www.linkedin.com/in/avirup-saha-3207b0187/'><img src={LinkedIn} alt="LinkedIn"/></a>
                <a href='https://www.instagram.com/sahaavirup1998/'><img src={Instagram} alt="Instagram"/></a>
                
            </div>
        </div>
        <div className="i-right">
        <img src={Vector1} alt=""/>
        <img src={Vector2} alt=""/>
        <img src={Selfpic} alt=""/>
        <motion.img
        initial = {{left: '-36%'}}
        whileInView = {{left: '-24%'}}
        transition = {transition}

        src={Glassesimoji} alt=""/>

        <motion.div
        initial = {{left: '74%', top : '-4%'}}
        whileInView = {{left: '68%'}}
        transition = {transition}
        style={{top: '-4%', left: '56%'}}>
          <FloatingDiv className="floating-div" image={Crown} txt1='Web' txt2='Developer'/>
        </motion.div>

        <motion.div 
        initial = {{left: '9rem', top : '18rem'}}
        whileInView = {{left: '0rem'}}
        transition = {transition}

        style={{top: '18rem', left: '3rem'}}>
          <FloatingDiv className="floating-div" image={ThumbUp} txt1='UI/UX' txt2='Deigner'/>
        </motion.div>

        <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
        <div className='blur' style={{background: "#C1F5FF",
        top: '17rem',
        width: '21rem',
        left: '-8rem'}}></div>
        </div>
    </div>
  )
}

export default Intro
