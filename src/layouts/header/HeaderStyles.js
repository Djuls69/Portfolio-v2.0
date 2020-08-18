import { makeStyles } from '@material-ui/core'

export const headerStyles = makeStyles(theme => ({
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
