import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    marginBottom: '5rem',
    '& h1': {
      fontSize: '3.2rem',
      color: '#fff',
      '& span': {
        marginRight: '1rem',
        fontSize: '2rem',
        fontFamily: '"Fira Code", monospace',
        color: '#3fc1c9'
      }
    }
  }
}))

const SectionTitle = ({ num, text }) => {
  const classes = useStyles()
  return (
    <div className={classes.sectionTitle}>
      <h1>
        <span>{`#${num}.`}</span>
        {text}
      </h1>
    </div>
  )
}

export default SectionTitle
