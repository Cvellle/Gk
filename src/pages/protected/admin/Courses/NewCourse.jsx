import React from 'react'
import useReactRouter from 'use-react-router'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItemText, ListItem } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import GridContainer from '@components/Grid/GridContainer'
import Button from '@components/CustomButtons/Button'
import Accordion from '@components/Accordion'

// import imagePlaceholder from '@assets/images/placeholder.jpg'
import styles from '@assets/jss/pages/singleCourse'

const useStyles = makeStyles(styles)

const program = {
  id: 1,
  courseSlug: `prvi-kurs`,
  name: 'A1 Prvi kurs',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
  price: 22,
  publisher: 'GOLUX',
  targetGroup: 'Kids',
  level: 'A1',
  status: 'draft',
  lectures: [
    {
      name: 'Lekcija 1',
      slug: `lekcija-1`,
    },
    {
      name: 'Lekcija 2',
      slug: `lekcija-2`,
    },
    {
      name: 'Lekcija 3',
      slug: `lekcija-3`,
    },
  ],
}

const sekcije = [
  { sekcija: `SEKCIJA #1` },
  { sekcija: `SEKCIJA #2` },
  { sekcija: `SEKCIJA #3` },
  { sekcija: `SEKCIJA #4` },
]

const NewCoursePage = () => {
  const c = useStyles()

  const { history, location, match } = useReactRouter()

  // console.log('path', location)
  // console.log('match', match)

  return (
    <Container maxWidth="md">
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
        <p className={c.descriptionText}>{program.description}</p>
      </div>
      <List className={c.textBox}>
        <p>Lista sekcija:</p>
        {sekcije.map(el => (
          <Accordion
            key={el.sekcija}
            active={0}
            collapses={[
              {
                title: el.sekcija,
              },
            ]}
          >
            {program.lectures.map((lecture, index) => (
              <ListItem key={index} className={c.listItem} onClick={() => history.push(`${match.url}/${lecture.slug}`)}>
                <ListItemText>{lecture.name}</ListItemText>
              </ListItem>
            ))}
          </Accordion>
        ))}
      </List>
      <Button color="primary" size="sm" onClick={() => history.push('/courses')}>
        Back
      </Button>
    </Container>
  )
}

export default NewCoursePage
