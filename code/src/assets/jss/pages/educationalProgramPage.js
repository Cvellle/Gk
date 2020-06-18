import { title, transition, grayColor } from '../main'

const educationProgramPageStyle = theme => ({
  title: {
    ...title,
    textTransform: 'uppercase',
  },
  infoContainer: {
    borderRight: `1px solid ${grayColor[15]}`,
    '& img': {
      width: '100%',
      border: `1px solid ${grayColor[15]}`,
    },
  },
  textBox: {
    paddingTop: '20px',
    marginTop: '20px',
    borderTop: `1px solid ${grayColor[15]}`,
  },
  boldText: {
    fontWeight: '700',
  },
  descriptionText: {
    color: grayColor[19],
    fontWeight: '500',
  },
  paper: {
    padding: '25px 50px',
  },
  button: {
    marginLeft: 5,
    transition: transition.transition,
  },

  listItem: {
    background: grayColor[12],
    border: `1px solid ${grayColor[15]}`,
    marginBottom: '5px',
    '& :hover': {
      cursor: 'pointer',
    },
  },
  icon: {
    marginLeft: 15,
  },
})

export default educationProgramPageStyle
