import React from 'react'
import { withStyles } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import GridItem from '@components/Grid/GridItem'
import Card from '@components/Card/Card'
import CardBody from '@components/Card/CardBody'
import CardText from '@components/Card/CardText'
import CardHeader from '@components/Card/CardHeader'
import CardFooter from '@components/Card/CardFooter'
import Button from '@components/CustomButtons/Button'

import imagePlaceholder from '@assets/images/placeholder.jpg'
import style from '@assets/jss/pages/shopPage'

const ShopItem = ({ classes: c, program, onClick }) => {
    const headerColor = {
        published: 'success',
        draft: 'warning',
        blocked: 'danger',
    }
    return (
        <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card>
                <CardHeader color="success" text>
                    <CardText
                        color={headerColor[program.status]}
                        className={c.title}
                    >
                        {program.name}
                    </CardText>
                </CardHeader>
                <CardBody>
                    <img
                        src={imagePlaceholder}
                        className={c.image}
                        alt=""
                        onClick={onClick}
                    />
                    <p className={c.descriptionText}>{program.description}</p>
                </CardBody>
                <CardFooter>
                    <Button size="sm" color="primary">
                        Add to cart <ShoppingCart className={c.icon} />
                    </Button>
                    <h4 style={{ textAlign: 'right' }}>${program.price}</h4>
                </CardFooter>
            </Card>
        </GridItem>
    )
}

export default withStyles(style)(ShopItem)
