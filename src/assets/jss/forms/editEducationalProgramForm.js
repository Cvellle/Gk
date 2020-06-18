import { blackColor, hexToRgb } from '../main'
import customSelectStyle from '@assets/jss/components/customSelectStyle'

const editEducationalProgramStyle = {
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
  icon: {
    marginLeft: 15,
  },
}

export default editEducationalProgramStyle
