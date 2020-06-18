import { container, cardTitle, whiteColor, grayColor } from '../main'

const loginPageStyle = theme => ({
  container: {
    ...container,
    zIndex: '4',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '100px',
    },
  },
  cardTitle: {
    ...cardTitle,
    color: whiteColor,
  },
  textCenter: {
    textAlign: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center !important',
  },
  customButtonClass: {
    '&,&:focus,&:hover': {
      color: whiteColor,
    },
    marginLeft: '5px',
    marginRight: '5px',
  },
  inputAdornment: {
    marginRight: '18px',
  },
  inputAdornmentIcon: {
    color: grayColor[6],
  },
  card: {
    // transform: 'translate3d(0, -50px, 0)',
    marginTop: '70%',
  },
  cardHeader: {
    marginBottom: '20px',
    padding: '25px!important',
    background: '#A6D000!important',
  },
  socialLine: {
    padding: '0.9375rem 0',
  },
  logoImage: {
    backgroundSize: 'contain',
    height: 75,
    backgroundRepeat: 'no-repeat',
    marginBottom: 100,
    transform: 'translate3d(0, -60px, 0)',
  },
  forgotPass: {
    color: 'grey',
    textAlign: 'center',
    marginTop: 15,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  kidsLogoImgWrapper: {
    // backgroundSize: 'cover',

    width: '300px',
    height: '300px',
    position: 'fixed',
    top: '0',

    // height: 200,
    // width: 500,
    // backgroundRepeat: 'no-repeat',
    border: '1px solid red;',
    // marginTop:'-100%'

    // marginBottom: 100,
    // top:'0',
    // left:'0',
    // zIndex:'2000',
    // position:'absolute'
    // transform: 'translate3d(0, -60px, 0)',
  },
  kidsLogoImage: {
    width: '100%',
    height: '100%',
  },
})

export default loginPageStyle
