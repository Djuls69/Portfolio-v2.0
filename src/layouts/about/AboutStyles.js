import { makeStyles } from '@material-ui/core'

export const aboutStyles = makeStyles(theme => ({
  aboutContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  aboutImage: {
    width: '40%',
    minWidth: '30rem',
    textAlign: 'center',
    margin: '0 auto'
  },
  aboutDescription: {
    width: '60%',
    minWidth: '40rem',
    marginRight: '2rem',
    '& p': {
      marginBottom: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minWidth: 'auto'
    }
  },
  profilePic: {
    position: 'relative',
    display: 'inline-block',
    '& img': {
      width: '300px',
      height: '300px',
      borderRadius: 5,
      [theme.breakpoints.down('md')]: {
        width: '200px',
        height: '200px'
      }
    },
    '&::after': {
      display: 'block',
      content: '""',
      width: '300px',
      height: '300px',
      border: '2px solid #3fc1c9',
      position: 'absolute',
      top: '2rem',
      left: '2rem',
      zIndex: -1,
      borderRadius: 5,
      transition: 'all 0.1s cubic-bezier(.89,.88,.31,.31)',
      [theme.breakpoints.down('md')]: {
        width: '200px',
        height: '200px'
      }
    },
    '&:hover::after': {
      top: '1rem',
      left: '1rem'
    }
  }
}))
