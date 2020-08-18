import React from 'react'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import workDB from '../../data/workDB'
import PortfolioItem from '../../components/portfolioItem/PortfolioItem'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <SectionTitle num='03' text='Quelques projets' />
      {workDB.map(item => (
        <PortfolioItem key={item.id} item={item} />
      ))}
    </section>
  )
}

export default Portfolio
