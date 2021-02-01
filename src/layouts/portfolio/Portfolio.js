import React, { Fragment } from 'react'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import workDB from '../../data/workDB'
import PortfolioItem from '../../components/portfolioItem/PortfolioItem'

const Portfolio = () => {
  return (
    <Fragment>
      <section id='portfolio'>
        <SectionTitle num='04' text='Quelques projets' />
        {workDB.map(
          item => item.id !== 0 && <PortfolioItem key={item.id} item={item} />
        )}
      </section>
    </Fragment>
  )
}

export default Portfolio
