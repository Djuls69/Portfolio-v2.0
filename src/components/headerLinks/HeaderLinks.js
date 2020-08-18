import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  headerLinks: {
    display: 'flex',
    alignItems: 'center'
  },
  headerLinksDrawer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'
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
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2rem'
    }
  }
}))

const HeaderLinks = ({ drawer, closeDrawer }) => {
  const classes = useStyles()

  return (
    <ul className={!drawer ? classes.headerLinks : classes.headerLinksDrawer}>
      <li>
        <a className={classes.headerLink} href='#about' onClick={() => closeDrawer()}>
          <span>#01.</span> A propos de moi
        </a>
      </li>
      <li>
        <a className={classes.headerLink} href='#services' onClick={() => closeDrawer()}>
          <span>#02.</span> Services
        </a>
      </li>
      <li>
        <a className={classes.headerLink} href='#portfolio' onClick={() => closeDrawer()}>
          <span>#03.</span> Portfolio
        </a>
      </li>
      <li>
        <a className={classes.headerLink} href='#contact' onClick={() => closeDrawer()}>
          <span>#04.</span> Contact
        </a>
      </li>
    </ul>
  )
}

export default HeaderLinks
