import { makeStyles } from '@material-ui/core'

export const portfolioItemStyles = makeStyles(theme => ({
  projectContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    '&:not(:last-child)': {
      marginBottom: '10rem'
    },
    [theme.breakpoints.down('md')]: {
      width: '80%',
      margin: '0 auto'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: '100%',
      margin: '0 auto'
    }
  },
  projectImage: {
    width: '58%',
    position: 'relative',
    borderRadius: 5,
    overflow: 'hidden',
    '& img': {
      width: '100%',
      objectFit: 'contain',
      display: 'block',
      borderRadius: 5
    },
    '&:hover .makeStyles-projectOverlay-25': {
      opacity: 0.5
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '0 auto',
      '& img': {
        marginBottom: '2rem'
      }
    }
  },
  projectOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#3fc1c9',
    opacity: 0
  },
  projectContent: {
    width: '38%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    '& h2': {
      fontFamily: '"Fira Code", monospace',
      fontSize: '1.3rem',
      color: '#3fc1c9',
      fontWeight: 400
    },
    '& h1': {
      fontSize: '2.8rem'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  projectDescription: {
    zIndex: 1,
    width: '150%',
    textAlign: 'left',
    padding: '2rem',
    borderRadius: 2,
    backgroundColor: '#393e46',
    margin: '3rem 0',
    display: 'inline-block',
    fontSize: '1.8rem',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  projectTechnos: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: '2rem',
    fontFamily: '"Fira Code", monospace',
    fontSize: '1.1rem',
    opacity: 0.7,
    '& li': {
      marginLeft: '2rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem'
    }
  },
  projectLinks: {
    marginLeft: '2rem',
    '& svg': {
      height: '2.8rem',
      width: '2.8rem',
      fill: '#eee',
      transition: 'all 0.1s cubic-bezier(.89,.88,.31,.31)',
      '&:hover': {
        fill: '#3fc1c9',
        transform: 'translateY(-3px)'
      },
      [theme.breakpoints.down('sm')]: {
        height: '2rem',
        width: '2rem'
      }
    }
  }
}))
