import { grayColor, blackColor, hexToRgb } from '../main'
import customSelectStyle from '@assets/jss/components/customSelectStyle'

const shopPageStyle = theme => ({
  descriptionText: {
    color: grayColor[0],
    fontWeight: '500',
    marginTop: 10,
  },
  title: {
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  image: {
    width: '100%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  icon: {
    marginLeft: 15,
  },
  ...customSelectStyle,
  label: {
    cursor: 'pointer',
    paddingLeft: '0',
    color: `rgba(${hexToRgb(blackColor)}, 0.26)`,
    fontSize: '14px',
    lineHeight: '1.428571429',
    fontWeight: '400',
    display: 'inline-flex',
  },
  button: {
    marginLeft: 5,
  },
})

export default shopPageStyle
