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
    '& a': {
      '&:hover': {
        color: '#3fc1c9'
      }
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
      <li className={classes.headerLink}>
        <span>#01.</span>{' '}
        <a href='#about' onClick={drawer && closeDrawer}>
          A propos de moi
        </a>
      </li>
      <li className={classes.headerLink}>
        <span>#02.</span>{' '}
        <a href='#services' onClick={drawer && closeDrawer}>
          Services
        </a>
      </li>
      <li className={classes.headerLink}>
        <span>#03.</span>{' '}
        <a href='#portfolio' onClick={drawer && closeDrawer}>
          Portfolio
        </a>
      </li>
      <li className={classes.headerLink}>
        <span>#04.</span>{' '}
        <a href='#contact' onClick={drawer && closeDrawer}>
          Contact
        </a>
      </li>
    </ul>
  )
}

export default HeaderLinks
