import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Aboutme from './components/Aboutme'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Extracurriculaer from './components/Extracurriculaer'
import Contact from './components/Contact'
import Hobbies from './components/Hobbies'

function App() {
  

  return (
  
  <div className='bg-slate-100 px-3 py-8'>
    <div className='bg-white max-w-4xl mx-auto rounded-xl shadow-lg'>
      <Header/>
      <Aboutme/>
      <Education/>
      <Skills/>
     
      <Hobbies/>
      <Extracurriculaer/>
      <Contact/>
      
      
      

    </div>
 

  </div>
  
  
     
  )
}

export default App
