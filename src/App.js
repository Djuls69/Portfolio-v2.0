import React, { Fragment } from 'react'
import './App.css'
import Home from './layouts/home/Home'
import Header from './layouts/header/Header'
import SocialMedias from './layouts/socialMedias/SocialMedias'
import ContactRight from './layouts/contactRight/ContactRight'
import About from './layouts/about/About'
import Services from './layouts/services/Services'
import Portfolio from './layouts/portfolio/Portfolio'

const App = () => {
  return (
    <Fragment>
      <Header />
      <SocialMedias />
      <div className='content'>
        <Home />
        <About />
        <Services />
        <Portfolio />
      </div>
      <ContactRight />
    </Fragment>
  )
}

export default App
