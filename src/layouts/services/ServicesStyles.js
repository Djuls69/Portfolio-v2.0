import { makeStyles } from '@material-ui/core'

export const servicesStyles = makeStyles(theme => ({
  services: {},
  servicesContainer: {
    display: 'flex'
  },
  servicesCard: {
    textAlign: 'center',
    padding: '3rem 2rem',
    borderRadius: 5,
    height: '100%',
    transition: 'all 0.1s cubic-bezier(.89,.88,.31,.31)',
    '&:hover': {
      transform: 'translateY(-3px)'
    },
    '& svg': {
      fill: '#3fc1c9',
      margin: '2rem',
      width: '8rem',
      height: '8rem'
    },
    '& h1': {
      fontSize: '1.8rem',
      fontWeight: 300,
      marginBottom: '3rem',
      fontFamily: '"Fira Code", monospace'
    },
    '& p': {
      fontSize: '1.8rem',
      textAlign: 'left'
    },
    [theme.breakpoints.down('md')]: {
      width: '60%',
      margin: '0 auto'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '0 auto',
      '& svg': {
        width: '4rem',
        height: '4rem'
      }
    }
  },
  cardIcon: {
    position: 'relative',
    marginBottom: '5rem',
    '&::after': {
      display: 'block',
      content: '" "',
      height: '16rem',
      width: '16rem',
      border: '2px solid #3fc1c9',
      borderRadius: '100%',
      position: 'absolute',
      top: -18,
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)'
    },
    [theme.breakpoints.down('sm')]: {
      '&::after': {
        height: '8rem',
        width: '8rem',
        top: -0
      }
    }
  }
}))
