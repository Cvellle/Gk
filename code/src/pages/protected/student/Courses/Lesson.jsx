import React from 'react'
import useReactRouter from 'use-react-router'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import GridContainer from '@components/Grid/GridContainer'
import Button from '@components/CustomButtons/Button'
import Player from '@components/Player'
import styles from '@assets/jss/pages/singleCourse'

const useStyles = makeStyles(styles)

const fakeProgram = [
  {
    id: 1,
    slug: `lekcija-1`,
    name: 'Lekcija 1',
    videoHash: `vj83tc4hmj`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
    publisher: 'GOLUX',
    targetGroup: 'Kids',
    level: 'A1',
  },
  {
    id: 2,
    slug: `lekcija-2`,
    name: 'Lekcija 2',
    videoHash: `s7vgegzd49`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
    publisher: 'GOLUX',
    targetGroup: 'Kids',
    level: 'A2',
  },
  {
    id: 3,
    slug: `lekcija-3`,
    name: 'Lekcija 3',
    videoHash: `zizzhg0u9i`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
    publisher: 'GOLUX',
    targetGroup: 'Kids',
    level: 'A3',
  },
]

const LessonPage = () => {
  const c = useStyles()

  const { history, match } = useReactRouter()

  const program = fakeProgram.find(el => el.slug === match.params.lesson)

  return (
    <Container>
      <div className={c.videoContainer}>
        <Player videoHash={program.videoHash} />
      </div>
      <div className={c.textBox}>
        <GridContainer>
          <p className={c.boldText}>Level:&nbsp;</p>
          <p>{program.name}</p>
        </GridContainer>
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
      <Button color="primary" size="sm" onClick={() => history.push(`/my-courses/${match.params.courseName}`)}>
        Back
      </Button>
    </Container>
  )
}

export default LessonPage
