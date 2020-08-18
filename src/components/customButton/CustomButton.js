import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  customBtn: {
    color: '#3fc1c9',
    border: '1px solid #3fc1c9',
    borderRadius: 2,
    backgroundColor: 'transparent',
    padding: '2rem 2.8rem',
    fontSize: '1.4rem',
    fontFamily: '"Fira Code", monospace',
    cursor: 'pointer',
    transition: 'all 0.1s cubic-bezier(.89,.88,.31,.31)',
    '&:hover': {
      backgroundColor: '#3fc1c9',
      color: '#eee'
    }
  }
}))

const CustomButton = ({ text, ...otherProps }) => {
  const classes = useStyles()
  return (
    <button className={classes.customBtn} {...otherProps}>
      {text}
    </button>
  )
}

export default CustomButton
