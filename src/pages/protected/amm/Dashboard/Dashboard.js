import React from 'react'
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import Card from '@components/Card/Card'
import CardHeader from '@components/Card/CardHeader'
import CardIcon from '@components/Card/CardIcon'
import CardFooter from '@components/Card/CardFooter'
import Danger from '@components/Typography/Danger'

import Store from '@material-ui/icons/Store'
import Warning from '@material-ui/icons/Warning'
import DateRange from '@material-ui/icons/DateRange'
import Update from '@material-ui/icons/Update'
import LocalOffer from '@material-ui/icons/LocalOffer'

import withStyles from '@material-ui/core/styles/withStyles'

import style from '@assets/jss/pages/dashboardStyle'

const DashboardPage = ({ classes }) => (
    <>
        <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={3}>
                <Card>
                    <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                            <Warning />
                        </CardIcon>
                        <p className={classes.cardCategory}>Used Space</p>
                        <h3 className={classes.cardTitle}>
                            49/50 <small>GB</small>
                        </h3>
                    </CardHeader>
                    <CardFooter stats>
                        <div className={classes.stats}>
                            <Danger>
                                <Warning />
                            </Danger>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                Get more space
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
                <Card>
                    <CardHeader color="success" stats icon>
                        <CardIcon color="success">
                            <Store />
                        </CardIcon>
                        <p className={classes.cardCategory}>Revenue</p>
                        <h3 className={classes.cardTitle}>$34,245</h3>
                    </CardHeader>
                    <CardFooter stats>
                        <div className={classes.stats}>
                            <DateRange />
                            Last 24 Hours
                        </div>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
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
            </GridItem>
        </GridContainer>
    </>
)

export default withStyles(style)(DashboardPage)
