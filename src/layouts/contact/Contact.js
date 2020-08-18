import React from 'react'
import { ReactComponent as SendIcon } from '../../assets/icons/Icon-send.svg'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import CustomButton from '../../components/customButton/CustomButton'
import { contactStyles } from './ContactStyles'

const Contact = () => {
  const classes = contactStyles()
  return (
    <section id='contact'>
      <SectionTitle num='04' text='Et maintenant ?' center />
      <div className={classes.contactContainer}>
        <SendIcon className={classes.contactIcon} />
        <h1>Entrons en contact !</h1>
        <p>
          Si vous avez un projet, une idée, une question, ou juste pour discuter, ma boite mail est toujours ouverte!
          <br />
          Je ferai de mon mieux pour vous répondre dans les plus brefs délais.
        </p>
        <a href='mailto:julien.delusseau@gmail.com'>
          <CustomButton text='Dites Bonjour' />
        </a>
      </div>
    </section>
  )
}

export default Contact
