import React, { useEffect } from 'react'
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import Card from '@components/Card/Card'
import CardHeader from '@components/Card/CardHeader'
import CardIcon from '@components/Card/CardIcon'
import CardFooter from '@components/Card/CardFooter'
import Danger from '@components/Typography/Danger'
import Info from '@components/Typography/Info'
import Success from '@components/Typography/Success'

import Store from '@material-ui/icons/Store'
import Warning from '@material-ui/icons/Warning'
import DateRange from '@material-ui/icons/DateRange'
import Update from '@material-ui/icons/Update'
import LocalOffer from '@material-ui/icons/LocalOffer'
import PeopleIcon from '@material-ui/icons/People';

import withStyles from '@material-ui/core/styles/withStyles'

import style from '@assets/jss/pages/dashboardStyle'

// import { withApollo } from 'react-apollo'
import { useQuery, useMutation } from 'react-apollo-hooks'; 


import { USERS_QUERY } from '@apollo/server/queries'
import { POTENTIAL_USERS_QUERY } from '@apollo/server/queries';
import { TOOGLE_COLLAPSE } from '@apollo/client/mutations'





const DashboardPage = ({ classes }) => {
    const { refetch: refetchAll } = useQuery(USERS_QUERY)
    const { refetch: refetchPotential } = useQuery(POTENTIAL_USERS_QUERY)

    const toogleCollapse = useMutation(TOOGLE_COLLAPSE)

    useEffect(()=>{
        toogleCollapse({ variables: {value: '' }})
        refetchAll()
        refetchPotential()
    },[])
    
    
    const { data: allUsers } = useQuery(USERS_QUERY);
    const { loading: allUsersLoading } = useQuery(USERS_QUERY);
    const { data: potentialUsers } = useQuery(POTENTIAL_USERS_QUERY);
    const { loading: potentialUsersLoading } = useQuery(POTENTIAL_USERS_QUERY);
    console.log('asdf', potentialUsers)
    //getTotalRegisterdUsers 
    
    let  numberOfTotalUsers
    let numberOfPotUsers 
    if(!allUsersLoading && !potentialUsersLoading){
        numberOfTotalUsers =  allUsers.users.totalDocs
        numberOfPotUsers   = potentialUsers.getPotentialUsers.totalDocs
    } 
    
     
    
    let displayAllUsersNum 
    if(numberOfTotalUsers){
        displayAllUsersNum =  <h3 className={classes.cardTitle} style={{paddingTop:'1.8%'}}>
        
        {numberOfTotalUsers} <small>{numberOfTotalUsers > 1 || numberOfTotalUsers === 0 ? 'KORISNIKA' : 'KORISNIK'}</small>
        </h3>
    }else{
        displayAllUsersNum =<div>Loading...</div>
    }
    
    return (
    
    
    <>
    <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={6}>
                <Card>
                    <CardHeader color="info" stats icon>
                        <CardIcon color="info">
                            <PeopleIcon />
                        </CardIcon>
                        <p className={classes.cardCategory}></p>
                        {displayAllUsersNum}
                       {/* <h3 className={classes.cardTitle}>

                            {numberOfTotalUsers} <small>{numberOfTotalUsers > 1 || numberOfTotalUsers === 0 ? 'KORISNIKA' : 'KORISNIK'}</small>
    </h3>*/}
                    </CardHeader>
                    <CardFooter stats>
                        <div className={classes.stats}>
                            <Info>
                                <PeopleIcon />
                            </Info>
                            <a href="/users" style={{color: 'rgba(0, 0, 0, 0.87'}} >
                                REGISTROVANI KORISNICI
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
                <Card>
                    <CardHeader color="success" stats icon>
                        <CardIcon color="success">
                            <PeopleIcon />
                        </CardIcon>
                        <p className={classes.cardCategory}></p>
                        <h3 className={classes.cardTitle} style={{paddingTop:'1.8%'}}>
                            {numberOfPotUsers} <small>{numberOfPotUsers > 1 || numberOfPotUsers === 0 ? 'KORISNIKA' : 'KORISNIK'}</small>
                        </h3>
                    </CardHeader>
                    <CardFooter stats>
                        <div className={classes.stats}>
                            <Success>
                                <PeopleIcon />
                            </Success>
                            <a href="/potential-users" style={{color: 'rgba(0, 0, 0, 0.87'}} >
                                POTENCIJALNI KORISNICI
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </GridItem>
 {/*/           <GridItem xs={12} sm={6} md={6} lg={3}>
                <Card>
                    <CardHeader color="danger" stats icon>
                        <CardIcon color="warning">
                            <Update />
                        </CardIcon>
                        <p className={classes.cardCategory}>Fixed Issues</p>
                        <h3 className={classes.cardTitle}>75</h3>
                    </CardHeader>
                    <CardFooter stats>
                        <div className={classes.stats}>
                            <LocalOffer />
                            Tracked from Github
                        </div>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
                <Card>
                    <CardHeader color="info" stats icon>
                        <CardIcon color="info">
                            <Update />
                        </CardIcon>
                        <p className={classes.cardCategory}>Followers</p>
                        <h3 className={classes.cardTitle}>+245</h3>
                    </CardHeader>
                    <CardFooter stats>
                        <div className={classes.stats}>
                            <Update />
                            Just Updated
                        </div>
                    </CardFooter>
                </Card>
            </GridItem> /*/}
        </GridContainer>
    </>
)
    }

export default withStyles(style)(DashboardPage)
