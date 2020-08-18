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
    },
    [theme.breakpoints.down('sm')]: {
      '& h1': {
        fontSize: '2.8rem',
        '& span': {
          fontSize: '1.6rem'
        }
      }
    }
  }
}))

const SectionTitle = ({ num, text, center }) => {
  const classes = useStyles()
  return (
    <div style={{ textAlign: center && 'center' }} className={classes.sectionTitle}>
      <h1>
        <span>{`#${num}.`}</span>
        {text}
      </h1>
    </div>
  )
}

export default SectionTitle
