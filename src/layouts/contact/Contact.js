import React from 'react'
import { makeStyles } from '@material-ui/core'
import { ReactComponent as SendIcon } from '../../assets/icons/Icon-send.svg'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import CustomButton from '../../components/customButton/CustomButton'

const useStyles = makeStyles(theme => ({
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '& p': {
      margin: '3rem 0 5rem'
    },
    '& h1': {
      fontSize: '2.8rem'
    }
  },
  contactIcon: {
    width: '5rem',
    height: '5rem',
    fill: '#3fc1c9',
    marginBottom: '3rem'
  }
}))

const Contact = () => {
  const classes = useStyles()
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
