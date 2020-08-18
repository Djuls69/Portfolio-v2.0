import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  footer: {
    padding: '3rem 0 6rem',
    fontSize: '1.4rem',
    textAlign: 'center'
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer id='footer' className={classes.footer}>
      <p>&copy; Julien Delusseau 2020</p>
    </footer>
  )
}

export default Footer
