import React, { useEffect, useState, Fragment } from 'react'
import { useMediaQuery, useTheme, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import HeaderLinks from '../../components/headerLinks/HeaderLinks'
import { headerStyles } from './HeaderStyles'

const Header = () => {
  const classes = headerStyles()
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
