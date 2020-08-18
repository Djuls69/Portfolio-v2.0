import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  contactContainer: {
    width: '4rem',
    position: 'fixed',
    right: '4rem',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&::after': {
      display: 'block',
      content: '""',
      height: '10rem',
      width: 1,
      backgroundColor: '#eee',
      margin: '0 auto'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  contactLink: {
    display: 'block',
    writingMode: 'vertical-rl',
    padding: '3rem 1rem',
    fontFamily: '"Fira Code", monospace',
    fontSize: '1.3rem',
    transition: 'all 0.1s cubic-bezier(.89,.88,.31,.31)',
    '&:hover': {
      color: '#3fc1c9',
      transform: 'translateY(-3px)'
    }
  }
}))

const ContactRight = () => {
  const classes = useStyles()
  return (
    <div className={classes.contactContainer}>
      <a className={classes.contactLink} href='mailto:julien.delusseau@gmail.com'>
        julien.delusseau@gmail.com
      </a>
    </div>
  )
}

export default ContactRight
