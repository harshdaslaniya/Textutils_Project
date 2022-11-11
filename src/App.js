

import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
import TextForm from './components/Textfrom';
import About from './components/About';
import React, { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact';

function App() {

  const [alert ,setalert] = useState(null);
  const showalert = (msg , type)=>{
    setalert({
      msg:msg,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)
  }
  const [mode,setMode] =useState(true); 
  const toggle = ()=>{
    if(mode===true)
    {
      document.body.style.backgroundColor='#18191A';
      sets1({
        color: 'white',
        backgroundColor :'#3A3B3C'
      })
      sets2({
          color: 'white',
          backgroundColor :'#242526'
      })
      setMode(false);
    }
    else
    {
      document.body.style.backgroundColor='#FFFFFF';
      sets1({
        color: 'black',
        backgroundColor :'#ffffff'
      })
      sets2({
          color: 'black',
          backgroundColor :'#ffffff'
      })
      setMode(true);
    }
  }
  const [s1 , sets1] = useState({
      color: 'black',
      backgroundColor :'#ffffff'
  })
  const [s2 , sets2] = useState({
      color: 'black',
      backgroundColor :'#ffffff'
  })
  return (
    <>
    <Router>
       <Navbar title="Textutils" about="About-Us" mode={mode} toggle={toggle}/>
       <div style={{height:"60px", width:"100%"}}> 
       <Alerts alert={alert}></Alerts>
       </div>
       <div>
        <Routes>
          <Route exact path="/about" element={<About s1={s1} s2={s2}></About>} />
          <Route exact path="/" element={<TextForm heading="Enter a text below👇..." mode={mode} s2={s2} showalert={showalert}/>} />
          <Route exact path="/contact" element={<Contact mode={mode}></Contact>} />
        </Routes>
       </div>
        </Router>
    </>
  );
}

export default App;