import React, { useState } from 'react'
import {
    withStyles,
    Paper,
    List,
    ListItemText,
    ListItem,
} from '@material-ui/core'
import { Edit } from '@material-ui/icons'

import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import Button from '@components/CustomButtons/Button'
import BuyCourseForm from '@forms/BuyCourse/BuyCourse'

import imagePlaceholder from '@assets/images/placeholder.jpg'
import style from '@assets/jss/pages/educationalProgramPage'

const program = {
    name: 'A1 Course for Kids',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
    price: 22,
    publisher: 'Oxford',
    targetGroup: 'Kids',
    level: 'A1',
    status: 'draft',
    lectures: [
        {
            name: 'Present Simple Tense',
        },
        {
            name: 'Present Simple Continious',
        },
        {
            name: 'Food and drink',
        },
        {
            name: 'Cars and girls in England!',
        },
        {
            name: 'Learning strange words.',
        },
    ],
}

const activeUser = {
    firstName: 'Hjong',
    lastName: 'Ching',
    country: 'China',
    email: 'hjongching987@gmail.com',
}

const EducationalProgramPage = ({ classes: c, history }) => {
    const [isBuying, setBuying] = useState(false)
    return (
        <>
            <GridContainer justify="space-evenly" alignItems="flex-start">
                <GridItem
                    xs={12}
                    sm={7}
                    md={6}
                    lg={6}
                    className={c.infoContainer}
                >
                    <>
                        <img
                            src={imagePlaceholder}
                            alt="Minakwa Learning Platform"
                        />
                        <h2 className={c.title}>{program.name}</h2>
                        <div className={c.textBox}>
                            <GridContainer>
                                <p className={c.boldText}>Publisher:&nbsp;</p>
                                <p>{program.publisher}</p>
                            </GridContainer>
                            <GridContainer>
                                <p className={c.boldText}>Group:&nbsp;</p>
                                <p> {program.targetGroup}</p>
                            </GridContainer>
                            <GridContainer>
                                <p className={c.boldText}>Level:&nbsp;</p>
                                <p>{program.level}</p>
                            </GridContainer>
                        </div>
                        <div className={c.textBox}>
                            <p className={c.descriptionText}>
                                {program.description}
                            </p>
                        </div>
                        <List className={c.textBox}>
                            <p>Lecutres overview:</p>
                            {program.lectures.map((lecture, index) => (
                                <ListItem key={index} className={c.listItem}>
                                    <ListItemText>{lecture.name}</ListItemText>
                                </ListItem>
                            ))}
                        </List>
                        <Button
                            color="primary"
                            size="sm"
                            onClick={() => history.push('/classes/2343/edit')}
                        >
                            Edit <Edit className={c.icon} />
                        </Button>
                    </>
                </GridItem>
                <GridItem xs={12} sm={5} md={5} lg={5}>
                    <Paper className={c.paper}>
                        <GridContainer justify="space-between">
                            <h4>Ready to start learning ?</h4>
                            {!isBuying && (
                                <Button
                                    color="primary"
                                    onClick={() => setBuying(true)}
                                    className={c.button}
                                >
                                    Buy now
                                </Button>
                            )}
                        </GridContainer>
                        {isBuying && (
                            <BuyCourseForm
                                activeUser={activeUser}
                                setBuying={setBuying}
                            />
                        )}
                    </Paper>
                </GridItem>
            </GridContainer>
        </>
    )
}

export default withStyles(style)(EducationalProgramPage)
