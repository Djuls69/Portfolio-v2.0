import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  footer: {
    padding: '3rem 0 6rem',
    fontSize: '1.4rem',
    fontFamily: '"Fira Code", monospace',
    textAlign: 'center'
  },
  footerLink: {
    textDecoration: 'underline',
    transition: 'all 0.1s cubic-bezier(.89,.88,.31,.31)',
    '&:hover': {
      color: '#3fc1c9'
    }
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer id='footer' className={classes.footer}>
      <p>&copy; Julien Delusseau 2020</p>
      <p>
        <a className={classes.footerLink} href='https://github.com/Djuls69/Portfolio-v2.0'>
          Github de ce portfolio
        </a>
      </p>
    </footer>
  )
}

export default Footer
