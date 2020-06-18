import React from 'react'
import { makeStyles } from '@material-ui/core'
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import Card from '@components/Card'
import CardBody from '@components/Card/CardBody'
import CardHeader from '@components/Card/CardHeader'

import LoginForm from '@forms/Login/LoginForm'
import Layout from '@layouts/PagesLayout'

import useReactRouter from 'use-react-router'

import { useMutation, useQuery } from 'react-apollo-hooks'
import { LOGIN_USER, CREATE_USER } from '@apollo/server/mutations'
import { LOGIN_LOCAL } from '@apollo/client/mutations'
import { GET_ME_QUERY } from '@apollo/client/queries'

import backgroundImg from '@assets/images/login-background.jpg'
import logoImage from '@assets/images/logo.png'
import style from '@assets/jss/pages/loginPage'
import logoKids from '../../../assets/images/logoGitKids1.png'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyle = makeStyles(style)


const Login = () => {
    const matchesXS = useMediaQuery('(max-width:376px)');
    const c = useStyle()
    const { history, location } = useReactRouter()

    const mode = location.search.split('mode=')[1] || 'login'
    const registrationKey = location.search.split('&')[0].substr(1)

    const loginUser = useMutation(LOGIN_USER)
    const loginUserLocal = useMutation(LOGIN_LOCAL)
    const createUser = useMutation(CREATE_USER)

    const { data } = useQuery(GET_ME_QUERY)
    React.useEffect(() => {}, [data])

    const bigScreen  = useMediaQuery('(min-width:1280px)')
    const containerPosition = bigScreen?'flex-start':'center'
    return (
       
    <React.Fragment>
  {/*


*/}  
    <Layout bgImage={backgroundImg}>
       
    <div className={c.container} >
  
        <GridContainer justify={containerPosition}  >
     
   
        
            <GridItem xs={12} sm={6} md={4}>
          
      

                <Card login className={c.card} style={{marginTop:matchesXS?'30%':'65%'}}>
                    <CardHeader
                   
                        className={`${c.cardHeader} ${c.textCenter}`}
                        color="success"
                    >
                        <h4>{mode === 'login'?'Prijavi se':'Napravi lozinku'}</h4>
                    </CardHeader>
                    <CardBody>
                        <LoginForm
                            mode={mode}
                            registrationKey={registrationKey}
                            loginUser={loginUser}
                            loginUserLocal={loginUserLocal}
                            createUser={createUser}
                        />
                        {mode === 'login' && (
                            <p
                                className={c.forgotPass}
                                onClick={() =>
                                    history.push(
                                        '/login?mode=forgotPassword',
                                    )
                                }
                            >
                                Zaboravljena lozinka ?
                            </p>
                        )}
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    </div>
</Layout>

    
    </React.Fragment>
       
    )
}

export default Login
