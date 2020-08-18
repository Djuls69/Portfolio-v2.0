import { makeStyles } from '@material-ui/core'

export const techListStyles = makeStyles(theme => ({
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
