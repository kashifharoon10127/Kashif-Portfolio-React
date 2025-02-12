import React from 'react'
import { useRoutes } from 'react-router-dom'
import Header from '../Components/Header'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import Experience from '../Components/Experience'

const AppRoutes = () => {
  return  useRoutes( [
    {path : '/' , element : <Header/>} ,
    {path : '/about' , element : <About/>} ,
    {path : '/projects' , element : <Projects/>} ,
    {path : '/skills' , element : <Skills/>} ,
    {path : '/experience' , element : <Experience/>} ,
    // {path : '*' , element : <Contact/>} ,
  ]
 
  )
}

export default AppRoutes
