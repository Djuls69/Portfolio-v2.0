import React, { Fragment } from 'react'
import './App.css'
import Home from './layouts/home/Home'
import Header from './layouts/header/Header'
import SocialMedias from './layouts/socialMedias/SocialMedias'
import ContactRight from './layouts/contactRight/ContactRight'
import About from './layouts/about/About'

const App = () => {
  return (
    <Fragment>
      <Header />
      <SocialMedias />
      <div className='content'>
        <Home />
        <About />
      </div>
      <ContactRight />
    </Fragment>
  )
}

export default App
