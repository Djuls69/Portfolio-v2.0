import React from 'react'
import { makeStyles } from '@material-ui/core'
import { ReactComponent as Linkedin } from '../../assets/icons/Icon-linkedin.svg'
import { ReactComponent as Github } from '../../assets/icons/Icon-github.svg'
import { ReactComponent as Twitter } from '../../assets/icons/Icon-twitter.svg'

const useStyles = makeStyles(theme => ({
  socialMedias: {
    width: '4rem',
    position: 'absolute',
    left: '4rem',
    bottom: 0,
    '&::after': {
      display: 'block',
      content: '""',
      height: '10rem',
      width: 1,
      backgroundColor: '#cbf1f5',
      margin: '0 auto'
    }
  },
  socialLink: {
    display: 'block',
    '&:last-child': {
      marginBottom: '2rem'
    }
  },
  socialIcon: {
    padding: '1rem',
    height: '3.8rem',
    width: '3.8rem',
    fill: '#cbf1f5',
    transition: 'all 0.1s cubic-bezier(.89,.88,.31,.31)',
    '&:hover': {
      fill: '#3fc1c9',
      transform: 'translateY(-3px)'
    }
  }
}))

const SocialMedias = () => {
  const classes = useStyles()
  return (
    <div className={classes.socialMedias}>
      <a className={classes.socialLink} href='#!'>
        <Github className={classes.socialIcon} />
      </a>
      <a className={classes.socialLink} href='#!'>
        <Linkedin className={classes.socialIcon} />
      </a>
      <a className={classes.socialLink} href='#!'>
        <Twitter className={classes.socialIcon} />
      </a>
    </div>
  )
}

export default SocialMedias
