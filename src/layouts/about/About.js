import React from 'react'
import TechList from '../../components/techList/TechList'
import profilePic from '../../assets/images/profile.jpg'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import { aboutStyles } from './AboutStyles'

const About = () => {
  const classes = aboutStyles()
  return (
    <section id='about'>
      <SectionTitle num='01' text='A propos de moi' />
      <div className={classes.aboutContainer}>
        <div className={classes.aboutDescription}>
          <p>Salut, moi c'est Julien, développeur web.</p>
          <p>
            Ma passion est de créer tout ce que l'on peut trouver sur internet, que ce soit des sites web, des
            applications, et tout ce qui se trouve entre les deux. Mon objectif est de satisfaire chaques utilisateurs
            avec des produits qui offrent des expériences performantes.
          </p>
          <p>Une brève liste des technologies dont je me sers au quotidien:</p>
          <TechList />
        </div>
        <div className={classes.aboutImage}>
          <div className={classes.profilePic}>
            <img src={profilePic} alt='Profil' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
