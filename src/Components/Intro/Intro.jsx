import React, { useContext } from "react";
import { themeContext } from "../../Context";
import'./Intro.css';
import Githup from '../../img/githup.png'
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Women from '../../img/women.png';
import Like from '../../img/like.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
<div className="intro">
    <div className="i-left">
        <div className="i-name" style={{color: darkMode?'palevioletred':''}}>
        <span>Hy! I Am</span>
        <span>Gizem Karagözlü</span>
        <span style={{color: darkMode?'white':''}}>I am currently learning Mobile development and SAP and in
             addition I am trying to learn web.</span>
        </div>
        <button className="button i-button">Hire me</button>
       <div className="i-icons">
        <a href='https://www.instagram.com/gizem.karagozlu01/'>
       <img src={Instagram} alt=''></img>
       </a>
       <a href='https://github.com/Gizemkaragozlu'>
       <img src={Githup} alt=''></img>
       </a>
       <a href='https://www.linkedin.com/in/gizemkaragozlu/'>
        <img src={LinkedIn} alt=''></img>
        </a>
       </div>
    </div> 
    <div className="i-right">
        <img src={Women} alt= ""></img>
        <img src={glassesimoji} alt=''></img>
        <div style={{top: '-4%', left:'68%',color:'white'}}>
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{ top: '18rem' , left: '0rem',color:'white'}}>
          <FloatingDiv image={Like} txt1='Mobil' txt2='Design'/>
        </div>
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur" style={{
          background: '#C1F5FF',
          top:'17rem',
          width:'21rem',
          height:'11rem',
          left:'-9rem',

      }}></div>
    </div>
</div>
  )
}

export default Intro