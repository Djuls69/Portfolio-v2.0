import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  aboutList: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '3rem'
    }
  },
  aboutListItem: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    marginRight: '4rem',
    '& i': {
      color: '#3fc1c9',
      marginRight: '1rem'
    }
  }
}))

const TechList = () => {
  const classes = useStyles()
  return (
    <div className={classes.aboutList}>
      <ul>
        <li className={classes.aboutListItem}>
          <i className='fas fa-angle-right' />
          Javascript
        </li>
        <li className={classes.aboutListItem}>
          <i className='fas fa-angle-right' />
          React
        </li>
        <li className={classes.aboutListItem}>
          <i className='fas fa-angle-right' />
          Node JS
        </li>
      </ul>
      <ul>
        <li className={classes.aboutListItem}>
          <i className='fas fa-angle-right' />
          HTML &amp; (S)CSS
        </li>
        <li className={classes.aboutListItem}>
          <i className='fas fa-angle-right' />
          Redux
        </li>
        <li className={classes.aboutListItem}>
          <i className='fas fa-angle-right' />
          Wordpress
        </li>
      </ul>
    </div>
  )
}

export default TechList
