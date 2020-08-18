import React from 'react'
import { makeStyles } from '@material-ui/core'
import SectionTitle from '../../components/sectionTitle/SectionTitle'

const useStyles = makeStyles(theme => ({
  contact: {}
}))

const Contact = () => {
  const classes = useStyles()
  return (
    <section id='services' className={classes.contact}>
      <SectionTitle num='04' text='Et maintenant ?' center />
    </section>
  )
}

export default Contact
