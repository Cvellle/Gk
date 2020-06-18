import React from 'react'
import useReactRouter from 'use-react-router'
import { makeStyles, styled } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import ArtTrack from '@material-ui/icons/ArtTrack'
import Refresh from '@material-ui/icons/Refresh'
import Edit from '@material-ui/icons/Edit'
import AddIcon from '@material-ui/icons/Add'
import Container from '@material-ui/core/Container'
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import Button from '@components/CustomButtons/Button'
import Card from '@components/Card/Card'
import CardHeader from '@components/Card/CardHeader'
import CardBody from '@components/Card/CardBody'
import CardFooter from '@components/Card/CardFooter'
import coursePoster1 from '@assets/images/courses/card-1.jpeg'
import coursePoster2 from '@assets/images/courses/card-2.jpeg'
import coursePoster3 from '@assets/images/courses/card-3.jpeg'
import coursePoster4 from '@assets/images/courses/card-1.jpeg'
import styles from '@assets/jss/pages/allCoursesStudent'

const useStyles = makeStyles(styles)

const AddCourse = styled(GridItem)({
  display: `flex`,
})

const AddBody = styled(CardBody)({
  display: `flex`,
  justifyContent: `space-evenly`,
  height: `250px`,
})

const AddBox = styled('div')({
  margin: `auto`,
})

const AddBtn = styled(Fab)({
  width: `7em`,
  height: `7em`,
})

const PlusIcon = styled(AddIcon)({
  fontSize: `5em`,
})

const fakeData = {
  courses: [
    {
      id: 1,
      courseName: `Prvi kurs`,
      courseDesc: `Opis za prvi kurs`,
      coursePoster: coursePoster1,
      courseSlug: `prvi-kurs`,
    },
    {
      id: 2,
      courseName: `Drugi kurs`,
      courseDesc: `Opis za drugi kurs`,
      coursePoster: coursePoster2,
      courseSlug: `drugi-kurs`,
    },
    {
      id: 3,
      courseName: `Treci kurs`,
      courseDesc: `Opis za treci kurs`,
      coursePoster: coursePoster3,
      courseSlug: `treci-kurs`,
    },
    {
      id: 4,
      courseName: `Cetvrti kurs`,
      courseDesc: `Opis za cetvrti kurs`,
      coursePoster: coursePoster4,
      courseSlug: `cetvrti-kurs`,
    },
    // {
    //   id: 4,
    //   courseName: `Cetvrti kurs`,
    //   courseDesc: `Opis za cetvrti kurs`,
    //   coursePoster: coursePoster4,
    //   courseSlug: `cetvrti-kurs`,
    // },
    // {
    //   id: 4,
    //   courseName: `Cetvrti kurs`,
    //   courseDesc: `Opis za cetvrti kurs`,
    //   coursePoster: coursePoster4,
    //   courseSlug: `cetvrti-kurs`,
    // },
  ],
}

const AllCoursesPage = () => {
  const c = useStyles()

  // query course slug
  // const [me, setMe] = useState(null)

  // const { data } = useQuery(GET_ME_QUERY)
  // useEffect(() => {
  //   const name = data && data.me && data.me.firstName
  //   setMe(name)
  // }, [data])

  const { history } = useReactRouter()

  const onCourseClick = slug => history.push(`/courses/${slug}`)

  const onAddCourseClick = () => history.push(`/courses/new-course`)

  return (
    <Container>
      <GridContainer>
        {fakeData.courses.map(el => (
          <GridItem key={el.id} xs={12} sm={12} md={4} className={c.gridItem}>
            <Card product className={c.cardHover}>
              <CardHeader image className={c.cardHeaderHover} onClick={() => onCourseClick(el.courseSlug)}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={el.coursePoster} alt="..." />
                </a>
              </CardHeader>
              <CardBody>
                <div className={c.cardHoverUnder}>
                  <Tooltip id="tooltip-top" title="View" placement="bottom" c={{ tooltip: c.tooltip }}>
                    <Button color="transparent" simple justIcon>
                      <ArtTrack className={c.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip id="tooltip-top" title="Edit" placement="bottom" c={{ tooltip: c.tooltip }}>
                    <Button color="success" simple justIcon>
                      <Refresh className={c.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip id="tooltip-top" title="Remove" placement="bottom" c={{ tooltip: c.tooltip }}>
                    <Button color="danger" simple justIcon>
                      <Edit className={c.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <h4 className={c.cardProductTitle}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    {el.courseName}
                  </a>
                </h4>
                <p className={c.cardProductDesciprion}>{el.courseDesc} </p>
              </CardBody>
              <CardFooter product>
                <Button link className={c.price} onClick={() => onCourseClick(el.courseSlug)}>
                  <h4>start course</h4>
                </Button>
                <div className={`${c.stats} ${c.productStats}`}>length</div>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
        <AddCourse xs={12} sm={12} md={4} className={c.gridItem}>
          <Card product className={c.cardHover}>
            <AddBody>
              <AddBox>
                <Tooltip id="tooltip-top" title="Dodaj kurs" placement="bottom" c={{ tooltip: c.tooltip }}>
                  <AddBtn onClick={onAddCourseClick} color="primary" aria-label="add">
                    <PlusIcon />
                  </AddBtn>
                </Tooltip>
              </AddBox>
            </AddBody>
          </Card>
        </AddCourse>
      </GridContainer>
    </Container>
  )
}

export default AllCoursesPage
