import React, { Fragment } from 'react'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import workDB from '../../data/workDB'
import ExperienceItem from '../../components/experienceItem/ExperienceItem'

const Experiences = () => {
  return (
    <Fragment>
      <section id='experiences'>
        <SectionTitle num='03' text='Dernière expérience professionnelle' />
        {workDB.map(
          item => item.id === 0 && <ExperienceItem key={item.id} item={item} />
        )}
      </section>
    </Fragment>
  )
}

export default Experiences
