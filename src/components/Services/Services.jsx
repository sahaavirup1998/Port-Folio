import React,{useContext} from 'react'
import './Services.css';
import HeartEmoji from "../../images/heartemoji.png";
import Glasses from "../../images/glasses.png";
import Humble from "../../images/humble.png";
import Card from '../Card/Card';
import Resume from './Avirup Saha CV.pdf';
import {themeContext} from '../../Context'
import {motion} from 'framer-motion'

function Services() {

    const transition = {duration : 1, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode ? 'grey' : ''}}>My Awesome</span>
            <span>services</span>
            <span>
                I am an Elctronics & Communication Engineer. I completed my graduation in 2020
                <br/>
                from University Institute of Technology, Burdwan.
                <br/> 
                Currently I am working in Epsilon as a Frontend Developer.
            </span>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <motion.div 
            initial = {{left: '25rem'}}
            whileInView = {{left: '14rem'}}
            transition = {transition}
            
            style={{left: "14rem"}}>
                <Card 
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, Teleport Hq, Adobe XD, Photoshop"}
                />
            </motion.div>

            {/* second card */}
            <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}

            style={{top: "12rem", left: "-4rem"}}>
                <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {"Html, CSS, JavaScript, React JS, C, BootStrap"}
                />
            </motion.div>

            {/* third card */}
            <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
            
            style={{top: "19rem", left: "12rem"}}>
                <Card
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {"I try to learn the animation and Motion design in UI/UX "}
                />
            </motion.div>
            <div className=" blur s-blur2" style={{background : "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services