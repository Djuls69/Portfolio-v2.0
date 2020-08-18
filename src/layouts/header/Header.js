import React, { useEffect, useState, Fragment } from 'react'
import { makeStyles, useMediaQuery, useTheme, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import HeaderLinks from '../../components/headerLinks/HeaderLinks'

const useStyles = makeStyles(theme => ({
  header: {
    height: '10rem',
    backgroundColor: '#222831',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 5rem',
    position: 'sticky',
    zIndex: 100,
    transition: 'all 0.3s cubic-bezier(.89,.88,.31,.31)',
    [theme.breakpoints.down('sm')]: {
      padding: '0 2rem',
      height: '5rem'
    }
  },
  menuIcon: {
    fill: '#3fc1c9',
    width: '3rem',
    height: '3rem',
    zIndex: 100
  },
  drawer: {
    backgroundColor: '#393e46',
    color: '#ccc',
    width: '60%',
    padding: '2rem'
  }
}))

const Header = () => {
  const classes = useStyles()
  const [scrollingDown, setScrollingDown] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

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

  const closeDrawer = () => {
    setOpenDrawer(false)
  }

  return (
    <nav style={{ top: scrollingDown ? -100 : 0 }} className={classes.header}>
      {matches ? (
        <Fragment>
          <MenuIcon onClick={() => setOpenDrawer(!openDrawer)} className={classes.menuIcon} />
          <Drawer
            classes={{ paper: classes.drawer }}
            anchor='right'
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <HeaderLinks drawer closeDrawer={closeDrawer} />
          </Drawer>
        </Fragment>
      ) : (
        <HeaderLinks />
      )}
    </nav>
  )
}

export default Header
