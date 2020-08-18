import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  header: {
    height: '10rem',
    backgroundColor: '#222831',
    display: 'flex',
    padding: '0 5rem',
    position: 'sticky',
    zIndex: 100,
    transition: 'all 0.3s cubic-bezier(.89,.88,.31,.31)'
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
  const [scrollingDown, setScrollingDown] = useState(false)

  useEffect(() => {
    let lastScroll = window.scrollY
    window.addEventListener('scroll', () => {
      if (lastScroll > window.scrollY) {
        setScrollingDown(false)
      } else if (lastScroll < window.scrollY) {
        setScrollingDown(true)
      }
      lastScroll = window.scrollY
    })
  })

  return (
    <nav style={{ top: scrollingDown ? -100 : 0 }} className={classes.header}>
      <ul className={classes.headerLinks}>
        <li>
          <a className={classes.headerLink} href='#about'>
            <span>#01.</span> A propos de moi
          </a>
        </li>
        <li>
          <a className={classes.headerLink} href='#services'>
            <span>#02.</span> Services
          </a>
        </li>
        <li>
          <a className={classes.headerLink} href='#portfolio'>
            <span>#03.</span> Portfolio
          </a>
        </li>
        <li>
          <a className={classes.headerLink} href='#contact'>
            <span>#04.</span> Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
