const workDB = [
  {
    id: 4,
    compétences: 'fullstack',
    tags: ['HTML', 'JSS', 'React', 'Redux', 'Node', 'MongoDB'],
    titre: 'Emaily',
    img: require('../assets/images/project09.jpg'),
    description:
      "Emaily est une application simple, qui vous permet d'envoyer à vos utilisateur un email, une enquête de satisfaction, et d'enregistrer son opinion. Afin de créer une enquête, vous devez au préalable vous identifier avec Google, puis ajouter du crédit avec Stripe.",
    link: 'https://agile-garden-39174.herokuapp.com',
    github: 'https://github.com/julien-delusseau/emaily'
  },
  {
    id: 3,
    compétences: 'fullstack',
    tags: ['HTML', 'JSS', 'React', 'Redux', 'Node', 'MongoDB'],
    titre: 'Events',
    img: require('../assets/images/project08.jpg'),
    description:
      'Le but de cette application est de créer des évènements. Vous pouvez vous inscrire, créer vos évènements, ajouter des commentaires, ou participer aux évènements crées par les autres utilisateurs.',
    link: 'https://hidden-plains-27480.herokuapp.com',
    github: 'https://github.com/julien-delusseau/mern-events'
  },
  {
    id: 2,
    compétences: 'frontend',
    tags: ['HTML', 'JSS', 'React', 'Redux', 'Redux-Persist', 'Firebase'],
    titre: 'Amazon Clone',
    img: require('../assets/images/project06.png'),
    description:
      'Clone du célèbre site Amazon, créé avec React, Redux et Firebase.Vous pouvez vous identifier, ajouter et supprimer des items de votre panier, et conserver vos données.',
    link: 'https://elated-wozniak-b4d131.netlify.app',
    github: 'https://github.com/julien-delusseau/amazon-clone'
  },
  {
    id: 1,
    compétences: 'frontend',
    tags: ['HTML', 'SASS', 'Javascript', 'React', 'Redux', 'Firebase'],
    titre: 'CRWN Clothing',
    img: require('../assets/images/project05.png'),
    description:
      "Développement d'une e-commerce, à l'aide de React et Redux, utilisant Firebase pour la base de données et l'authentification, et intégrant multiples librairies.",
    link: 'https://react-crwnclothing-app.herokuapp.com',
    github: 'https://github.com/julien-delusseau/crwn-clothing'
  },
  {
    id: 0,
    compétences: 'frontend',
    tags: ['HTML', 'CSS', 'Javascript'],
    titre: 'Formateur professionnel HTML-CSS-JS pour WebForce3',
    img:
      'https://3.bp.blogspot.com/-SkFKyeof70U/Wkp1fkweJMI/AAAAAAAADK4/V4b4QMek3gEOxnJ_5iSKRVlsZ5KTfkmYACLcBGAs/s1600/facade_philo_square-800x800.jpg',
    description: `Compéténces requises:
      - Préparer les contenus de cours nécessaires afin de garantir le succès de cette formation.
      - Animer personnellement la formation dans le respect des objectifs fixés.
      - Assurer la correction d’évaluations passées par les participants durant la session de formation.
      `
  }
]

export default workDB
