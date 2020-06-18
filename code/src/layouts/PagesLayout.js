import React from 'react'
import { withStyles } from '@material-ui/core'
import backgrImg from '../assets/images/Artboard_1.png'
import logoKids from '../assets/images/logoGitKids1.png'

import style from '@assets/jss/layouts/pagesStyle'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const PagesLayout = ({ classes: c, children }) => {
    const matchesXS = useMediaQuery('(max-width:376px)');
    return (
        <div
        style={{ backgroundImage: `url(${backgrImg})`, backgroundPosition:'100% center', backgroundAttachment:'fixed', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}
         className={c.wrapper}>
       
            <div
                className={c.fullPage}
                
            >
         {/*
        
        
        */}  
        <div>
        <div
        className={c.logoContainer}
        style={{width:matchesXS?'140px':''}}
        // style={{
        //     width:'300px',
        //     height:'300px',
        //     position:'fixed',
        //     top:'0',
         
        // }}
    >
    <img
    style={{width:'100%'}}
     className={c.kidsLogoImage} src={logoKids} alt="git kids slika"/>
    </div>
        </div>
       
                {children}
            </div>
        </div>
    )
}

export default withStyles(style)(PagesLayout)
