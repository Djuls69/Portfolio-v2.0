const { makeStyles } = require('@material-ui/core')

export const contactStyles = makeStyles(theme => ({
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '& p': {
      margin: '3rem 0 5rem'
    },
    '& h1': {
      fontSize: '2.8rem'
    },
    [theme.breakpoints.down('md')]: {
      width: '80%',
      margin: '0 auto'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      margin: '0 auto'
    }
  },
  contactIcon: {
    width: '5rem',
    height: '5rem',
    fill: '#3fc1c9',
    margin: '3rem 0'
  }
}))
