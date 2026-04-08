import React from 'react'
import './Herosection.css'
function Herosection({HeroImg, Pagename}) {
  return (
     <div className="hero-image" style={{position:'relative', backgroundColor:'blue', border:'none', height:'400px', opacity:'0.8'}}>
        <img  src={HeroImg} style={{height:'400px', width:'100%', objectFit:'cover', opacity: '1', border:'none'}} alt="" />
        <div style={{position:'absolute', left:'50%', top:'60%', transform: 'translate(-50%, -50%)', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', color:'#fff'}} className="hero-text">
          <span style={{display:'block', fontSize:'60px', fontWeight:'bold'}} className='hero-text-Fspan'>{Pagename}</span>
          <span style={{fontSize:'20px'}}>Home/{Pagename}</span>
        </div>
      </div>
  )
}

export default Herosection