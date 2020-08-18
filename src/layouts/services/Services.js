import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import { ReactComponent as LaptopIcon } from '../../assets/icons/Icon-laptop-code.svg'
import { ReactComponent as UsersIcon } from '../../assets/icons/Icon-users.svg'
import { ReactComponent as PencilIcon } from '../../assets/icons/Icon-pencil-ruler.svg'
import SectionTitle from '../../components/sectionTitle/SectionTitle'

const useStyles = makeStyles(theme => ({
  services: {},
  servicesContainer: {
    display: 'flex'
  },
  servicesCard: {
    textAlign: 'center',
    padding: '3rem 2rem',
    borderRadius: 5,
    height: '100%',
    transition: 'all 0.1s cubic-bezier(.89,.88,.31,.31)',
    '&:hover': {
      transform: 'translateY(-3px)'
    },
    '& svg': {
      fill: '#3fc1c9',
      margin: '2rem',
      width: '8rem',
      height: '8rem'
    },
    '& h1': {
      fontSize: '1.8rem',
      fontWeight: 300,
      marginBottom: '3rem',
      fontFamily: '"Fira Code", monospace'
    },
    '& p': {
      fontSize: '1.8rem',
      textAlign: 'left'
    }
  },
  cardIcon: {
    position: 'relative',
    marginBottom: '5rem',
    '&::after': {
      display: 'block',
      content: '" "',
      height: '16rem',
      width: '16rem',
      border: '2px solid #3fc1c9',
      borderRadius: '100%',
      position: 'absolute',
      top: -18,
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)'
    }
  }
}))

const Services = () => {
  const classes = useStyles()
  return (
    <section id='services' className={classes.services}>
      <SectionTitle num='02' text='Services' center />
      <div className={classes.servicesContainer}>
        <Grid container spacing={3}>
          <Grid item md={12} lg={4}>
            <div className={classes.servicesCard}>
              <div className={classes.cardIcon}>
                <LaptopIcon />
              </div>
              <h1>Web Développement</h1>
              <p>
                En utilisant HTML, Sass, Javascript et React, je suis passionné par le développement de sites web, tout
                en conservant un code totalement modulaire. Et si vous avez un service back-end, ou bien une base de
                données, je m'occupe de la liaison.
              </p>
            </div>
          </Grid>
          <Grid item md={12} lg={4}>
            <div className={classes.servicesCard}>
              <div className={classes.cardIcon}>
                <UsersIcon />
              </div>
              <h1>Expérience Utilisateur</h1>
              <p>
                Je ne compte plus le nombre de fois où j'ai essayé d'accomplir une tâche simple sur un site et j'ai fini
                par vouloir jeter mon ordinateur par la fenêtre avec frustration. Inutile de dire que l'expérience
                utilisateur est un aspect primordial et essentiel à la réussite d'un projet.
              </p>
            </div>
          </Grid>
          <Grid item md={12} lg={4}>
            <div className={classes.servicesCard}>
              <div className={classes.cardIcon}>
                <PencilIcon />
              </div>
              <h1>Désign Réactif</h1>
              <p>
                Je m'efforce de développer et de mettre en œuvre des interfaces réactives et esthétiques afin que vos
                sites web et applications s'adaptent à tout type d'appareil, plateforme ou navigateur.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default Services
