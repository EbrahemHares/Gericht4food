import React from 'react'
import {Footer, Header, AboutUs, Laurels, SpecialMenu, Intro, FindUs,Chef,Gallery} from "./containers"
import {Navbar} from './components'
import "./App.css"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  )
}

export default App