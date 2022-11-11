import React from 'react'
import "./App.css"
import profile from "./profile.jpg";
import github from "./github.png";
import hackerrank from "./hackerrank.png";
import instagram from "./instagram.png";
import leetcode from "./leetcode.png";
import linkedin from "./linkedin.png";
function Contact() {
  return (
    <>
    <div className='lighting container'>
      <div className='laser'>
      <span >
         <h3 className={'text-light'}>contact us</h3> 
      </span>
      </div>
      <span></span>
      <span></span>
    </div>
    <div className='parent mt-3'>
      <div className='child'>
       <img src={profile} alt="profile" className="center"></img>
      </div>
    </div>
    <div className='parent2'>
        <div className='flex__mod conteudo ' >
        <a href="https://www.hackerrank.com/harshdaslaniya" target="_blank" rel="noreferrer" > <img src={hackerrank} alt="hackerrank" className='zoom'></img></a>
        <a href="https://www.instagram.com/harshdaslaniya/"  target="_blank" rel="noreferrer" > <img src={instagram} alt="instagram" className='zoom zoom2'></img></a>
        <a href="https://leetcode.com/Harsh_Daslaniya/" target="_blank" rel="noreferrer" > <img src={leetcode} alt="leetcode" className='zoom'></img></a>
        <a href="https://www.linkedin.com/in/harsh-daslaniya-b939371b9/" target="_blank" rel="noreferrer" > <img src={linkedin} alt="linkedin" className='zoom'></img></a>
        <a href="https://github.com/harshdaslaniya" target="_blank" rel="noreferrer" > <img src={github} alt="github" className='zoom'></img> </a>
        </div>
    </div>
    </>
  )
}

export default Contact