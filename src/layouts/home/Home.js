import React from 'react'
import { makeStyles, Container } from '@material-ui/core'
import CustomButton from '../../components/customButton/CustomButton'

const useStyles = makeStyles(theme => ({
  home: {
    height: '80vh',
    display: 'flex',
    alignItems: 'center'
  },
  homeSub: {
    fontSize: '1.6rem',
    fontFamily: '"Fira Code", monospace',
    fontWeight: 300,
    color: '#3fc1c9',
    marginBottom: '2rem'
  },
  homeTitle: {
    fontSize: '7rem',
    color: '#cbf1f5',
    '& span': {
      display: 'block',
      color: 'rgba(203, 241, 245, 0.7)'
    }
  },
  homeContent: {
    margin: '3rem 0',
    maxWidth: '45rem'
  }
}))

const Home = () => {
  const classes = useStyles()
  return (
    <section id='home' className={classes.home}>
      <Container maxWidth='lg'>
        <h6 className={classes.homeSub}>Bonjour, moi c'est</h6>
        <h1 className={classes.homeTitle}>
          Julien Delusseau.
          <span>Web Développeur</span>
        </h1>
        <p className={classes.homeContent}>
          Je suis un développeur web spécialisé dans le développement de sites et applications.
        </p>
        <a href='mailto:julien.delusseau@gmail.com'>
          <CustomButton />
        </a>
      </Container>
    </section>
  )
}

export default Home
