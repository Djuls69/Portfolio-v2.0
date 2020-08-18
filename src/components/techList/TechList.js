import React from 'react'
import { techListStyles } from './TechListStyles'

const TechList = () => {
  const classes = techListStyles()
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
