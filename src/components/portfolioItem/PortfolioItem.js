import React from 'react'
import { ReactComponent as GithubLink } from '../../assets/icons/Icon-github.svg'
import { ReactComponent as ExternalLink } from '../../assets/icons/Icon-external-link.svg'
import { portfolioItemStyles } from './PortfolioItemStyles'
import { useTheme, useMediaQuery } from '@material-ui/core'

const PortfolioItem = ({ item }) => {
  const { id, tags, titre, img, description, link, github } = item
  const classes = portfolioItemStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div
      style={{ flexDirection: !matches && id % 2 !== 0 ? 'row' : 'row-reverse' }}
      className={classes.projectContainer}
    >
      <div className={classes.projectImage}>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <img src={img} alt={`${titre} Projet`} />
          <div className={classes.projectOverlay} />
        </a>
      </div>
      <div
        style={{ alignItems: !matches && id % 2 !== 0 ? 'flex-end' : 'flex-start' }}
        className={classes.projectContent}
      >
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
