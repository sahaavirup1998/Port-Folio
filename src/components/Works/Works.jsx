import React, { useContext } from 'react'
import './Works.css'
import Upwork from "../../images/Upwork.png";
import Fiverr from "../../images/fiverr.png";
import Amazon from "../../images/amazon.png";
import Shopify from "../../images/Shopify.png";
import Facebook from "../../images/Facebook.png"
import { themeContext } from '../../Context';
import { motion } from 'framer-motion'

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="works">
            <div className="work2">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'grey' : '' }}>Works for All These</span>
                    <span>Brands & Clients</span>
                    <span className="font25">
                        Enfa-Baby, A child care company of Thailand.
                        <br />
                        AbbVie, A pharma company of USA.
                    </span>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
                <div className="awesome">
                    <span style={{ color: darkMode ? 'grey' : '' }}>Some Special</span>
                    <span>Achivements</span>
                    <span className="font25">
                        Won 2nd prize at Techfest
                        <br />
                        Won 2nd prize at Raspberry-pi coding<br /> competition
                    </span>
                    <button className="button s-button">Hire Me</button>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>

            {/* right side */}

            <div className="w-right">
                <motion.div 
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle"
                >
                        <div className="w-secCircle">
                            <img src={Upwork} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Fiverr} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Amazon} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Shopify} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Facebook} alt="" />
                        </div>
                </motion.div>
                {/* Background circle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works