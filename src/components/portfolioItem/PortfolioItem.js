import React from 'react'
import { makeStyles } from '@material-ui/core'
import { ReactComponent as GithubLink } from '../../assets/icons/Icon-github.svg'
import { ReactComponent as ExternalLink } from '../../assets/icons/Icon-external-link.svg'

const useStyles = makeStyles(theme => ({
  projectContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    '&:not(:last-child)': {
      marginBottom: '10rem'
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
      display: 'block'
    },
    '&:hover .makeStyles-projectOverlay-25': {
      opacity: 0.5
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
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)'
  },
  projectTechnos: {
    display: 'flex',
    marginBottom: '2rem',
    fontFamily: '"Fira Code", monospace',
    fontSize: '1.1rem',
    opacity: 0.7,
    '& li': {
      marginLeft: '2rem'
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
      }
    }
  }
}))

const PortfolioItem = ({ item }) => {
  const { id, tags, titre, img, description, link, github } = item
  const classes = useStyles()

  return (
    <div style={{ flexDirection: id % 2 !== 0 ? 'row' : 'row-reverse' }} className={classes.projectContainer}>
      <div className={classes.projectImage}>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <img src={img} alt={`${titre} Projet`} />
          <div className={classes.projectOverlay} />
        </a>
      </div>
      <div style={{ alignItems: id % 2 !== 0 ? 'flex-end' : 'flex-start' }} className={classes.projectContent}>
        <h2>A propos du project</h2>
        <h1>{titre}</h1>
        <div className={classes.projectDescription}>{description}</div>
        <ul className={classes.projectTechnos}>
          {tags.map((techno, idx) => (
            <li key={idx}>{techno}</li>
          ))}
        </ul>
        <div>
          <a className={classes.projectLinks} href={github} target='_blank' rel='noopener noreferrer'>
            <GithubLink />
          </a>
          <a className={classes.projectLinks} href={link} target='_blank' rel='noopener noreferrer'>
            <ExternalLink />
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
