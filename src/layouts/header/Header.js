import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  header: {
    height: '10rem',
    display: 'flex',
    padding: '0 5rem',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  headerLinks: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center'
  },
  headerLink: {
    marginLeft: '5rem',
    fontSize: '1.3rem',
    fontFamily: '"Fira Code", monospace',
    transition: 'all 0.1s cubic-bezier(.89,.88,.31,.31)',
    '&:hover': {
      color: '#3fc1c9'
    },
    '& span': {
      color: '#3fc1c9'
    }
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <nav className={classes.header}>
      <ul className={classes.headerLinks}>
        <li>
          <a className={classes.headerLink} href='#!'>
            <span>#01.</span> A propos de moi
          </a>
        </li>
        <li>
          <a className={classes.headerLink} href='#!'>
            <span>#02.</span> Services
          </a>
        </li>
        <li>
          <a className={classes.headerLink} href='#!'>
            <span>#03.</span> Portfolio
          </a>
        </li>
        <li>
          <a className={classes.headerLink} href='#!'>
            <span>#04.</span> Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
