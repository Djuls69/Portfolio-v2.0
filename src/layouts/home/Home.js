import React from 'react'
import { makeStyles } from '@material-ui/core'
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
    color: '#eee',
    '& span': {
      display: 'block',
      color: 'rgba(255, 255, 255, 0.7)'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '5rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.5rem'
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
      <div>
        <h6 className={classes.homeSub}>Bonjour, moi c'est</h6>
        <h1 className={classes.homeTitle}>
          Julien Delusseau.
          <span>Web Développeur</span>
        </h1>
        <p className={classes.homeContent}>
          Je suis un développeur web spécialisé dans le développement de sites et applications.
        </p>
        <a href='mailto:julien.delusseau@gmail.com'>
          <CustomButton text='Me Contacter' />
        </a>
      </div>
    </section>
  )
}

export default Home
