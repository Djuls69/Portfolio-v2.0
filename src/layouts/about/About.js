import React from 'react'
import { makeStyles } from '@material-ui/core'
import TechList from '../../components/techList/TechList'
import profilePic from '../../assets/images/profile.jpg'
import SectionTitle from '../../components/sectionTitle/SectionTitle'

const useStyles = makeStyles(theme => ({
  aboutContainer: {
    display: 'flex'
  },
  aboutImage: {
    width: '40%',
    minWidth: '30rem',
    textAlign: 'center'
  },
  aboutDescription: {
    width: '60%',
    minWidth: '40rem',
    marginRight: '2rem',
    '& p': {
      marginBottom: '1.5rem'
    }
  },
  profilePic: {
    position: 'relative',
    display: 'inline-block',
    '& img': {
      width: '300px',
      height: '300px',
      borderRadius: 5
    },
    '&::after': {
      display: 'block',
      content: '""',
      width: '300px',
      height: '300px',
      border: '2px solid #3fc1c9',
      position: 'absolute',
      top: '2rem',
      left: '2rem',
      zIndex: -1,
      borderRadius: 5
    }
  }
}))

const About = () => {
  const classes = useStyles()
  return (
    <section id='about'>
      <SectionTitle num='1' text='A propos de moi' />
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
