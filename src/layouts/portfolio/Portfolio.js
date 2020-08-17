import React from 'react'
import { makeStyles } from '@material-ui/core'
import SectionTitle from '../../components/sectionTitle/SectionTitle'

const useStyles = makeStyles(theme => ({
  portfolio: {}
}))

const Portfolio = () => {
  const classes = useStyles()
  return (
    <section id='portfolio' className={classes.portfolio}>
      <SectionTitle num='3' text='Quelques projets' />
    </section>
  )
}

export default Portfolio
