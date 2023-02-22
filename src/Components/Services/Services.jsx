import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Profile from './Profile.pdf'
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="services">
   <div style={{display:'flex',flexDirection:'column' }}>
    {/*sol taraf*/}
    <div className="awesome" style={{color: darkMode?'palevioletred':''}}>
      <span>My Awesome</span>
      <span >Services</span>
      <spane style={{color: darkMode?'white':''}}>My field of interest is multifaceted.
        <br/>
         For example, I am interested in mobile software, web design and adobe design.
      </spane>
      {/*CV Download*/}
      <a href={Profile} download>
      <button className="button s-button">Download CV</button>
      </a>
      <div className="blur s-blur1" style={{background: "ABF1FF94"}}></div>
    </div>
    {/*sağ taraf*/}
    <div className="cards">
      
    <div style={{left:'14rem'}}>
     <Card
     emoji = {HeartEmoji}
     heading = {'Design'}
     detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
     />
     </div>
     {/* İkinci Kart*/}
     <div style={{top:"-12rem", left:'-4rem'}}>
     <Card
     emoji = {Glasses}
     heading = {'Developer'}
     detail = {"Html, Css, JavaScript, React, Php , Asp.net"}
     />
     </div>
     {/* Üçüncü Kart*/}
     <div style={{top:"19rem", left:'25rem'}}
     >
     <Card
     emoji = {Humble}
     heading = {'Mobil'}
     detail  = {"Kotlin, Java, Swift, Android, Ios"}
     />
     </div>
    </div>
    </div> 
     {
      // <div className="blur s_blur2" style={{background: "rgb(220, 159, 179"}}></div>
     }
    
   </div>
  )
}

export default Services