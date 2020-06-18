import React from 'react'
import { withStyles } from '@material-ui/core'
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import Button from '@components/CustomButtons/Button'
import { FormikTextInput, FormikSelectInput } from '@inputs'
import Card from '@components/Card'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import { CREATE_LECTURE, CREATE_PRODUCT } from '@apollo/server/mutations'
import AddLectureDialog from './AddLectureDialog'

import { SupervisorAccount } from '@material-ui/icons'

import useReactRouter from 'use-react-router'

import style from '@assets/jss/forms/addUserForm'

// Apollo
import { useMutation } from 'react-apollo-hooks'

const initialValues = {
    course: {
        name: '',
        price: '',
        description: '',
        image: '',
        publisher: '',
        targetGroup: '',
        level: '',
        classDuration: '',
        licenced: '',
        lectures: [],
    },
    class: {
        name: '',
        price: '',
        description: '',
        image: '',
        publisher: '',
        targetGroup: '',
        level: '',
        classDuration: '',
        lecture: [],
    },
    addon: {
        name: '',
        price: '',
        description: '',
        image: '',
        publisher: '',
        targetGroup: '',
        level: '',
        classDuration: '',
    },
}

const LecturesInput = ({ title, content }) => {
    return (
        <>
            <GridItem xs={12}>
                <p
                    style={{
                        marginTop: '30px',
                        color: 'grey',
                        fontSize: '16px',
                    }}
                >
                    {title}
                </p>
                <div
                    style={{
                        border: 'solid 1px grey',
                        padding: '20px',
                    }}
                >
                    <GridContainer justify="center" alignItems="center">
                        {content}
                    </GridContainer>
                </div>
            </GridItem>
        </>
    )
}

const Lecture = ({ name, description, content, tags, onDelete }) => {
    return (
        <div
            style={{
                width: '100%',
                margin: '15px',
                padding: '15px',
                border: 'solid 1px grey',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <h4>{name}</h4>
            <div>
                <Button color="primary">Edit</Button>
                <Button onClick={onDelete} color="primary">
                    Delete
                </Button>
            </div>
        </div>
    )
}

const AddUserForm = ({ classes: c }) => {
    const { history } = useReactRouter()

    const createLecture = useMutation(CREATE_LECTURE)
    const createProduct = useMutation(CREATE_PRODUCT)

    const [type, setType] = React.useState('course')

    const onDeleteLecture = (setFieldValue, lectures, index) => {
        let newLectures = [...lectures]
        newLectures.splice(index, 1)
        setFieldValue('lectures', newLectures)
    }

    const renderCourseFields = (setFieldValue, lectures) => {
        if (type === 'course') {
            return (
                <LecturesInput
                    title="Lectures *"
                    content={
                        <>
                            {lectures.map((lecture, index) => {
                                return (
                                    <Lecture
                                        key={index}
                                        {...lecture}
                                        onDelete={() =>
                                            onDeleteLecture(
                                                setFieldValue,
                                                lectures,
                                                index,
                                            )
                                        }
                                    />
                                )
                            })}
                            <AddLectureDialog
                                setFieldValue={setFieldValue}
                                lectures={lectures}
                            />
                        </>
                    }
                />
            )
        }
    }

    const renderClassFields = lecture => {
        if (type === 'class') {
            return (
                <LecturesInput
                    title="Lecture *"
                    content={
                        <>
                            <Button className={c.button} color="primary">
                                Create New Lecture
                            </Button>
                            <Button className={c.button} color="primary">
                                Add Existing Lecture
                            </Button>
                        </>
                    }
                />
            )
        }
    }

    const renderAddonFields = () => {
        if (type === 'addon') {
            return (
                <>
                    <GridItem xs={12}>
                        <Card>
                            <Card.Header>
                                <p>Parent Product:</p>
                            </Card.Header>
                            <Card.Body>
                                <GridContainer
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Button
                                        className={c.button}
                                        color="primary"
                                    >
                                        Add Product
                                    </Button>
                                </GridContainer>
                            </Card.Body>
                            <Card.Footer />
                        </Card>
                    </GridItem>
                </>
            )
        }
    }

    const renderCourseAndClassFields = () => {
        if (type === 'course' || type === 'class') {
            return (
                <>
                    <GridItem xs={12} sm={2}>
                        <Field
                            required
                            name="classDuration"
                            label="Class Duration"
                            component={FormikTextInput}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={2}>
                        <Field
                            required
                            name="publisher"
                            label="Publisher"
                            component={FormikTextInput}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={2}>
                        <Field
                            required
                            options={[
                                {
                                    label: 'Yes',
                                    value: 'true',
                                },
                                {
                                    label: 'No',
                                    value: 'false',
                                },
                            ]}
                            name="licenced"
                            label="Licenced"
                            component={FormikSelectInput}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={2}>
                        <Field
                            required
                            options={[
                                {
                                    label: 'A1',
                                    value: 'A1',
                                },
                                {
                                    label: 'A2',
                                    value: 'A2',
                                },
                                {
                                    label: 'B1',
                                    value: 'B1',
                                },
                                {
                                    label: 'B2',
                                    value: 'B2',
                                },
                            ]}
                            name="level"
                            label="Level"
                            component={FormikSelectInput}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                        <Field
                            required
                            options={[
                                {
                                    label: 'Students',
                                    value: 'STUDENTS',
                                },
                                {
                                    label: 'Kids',
                                    value: 'KIDS',
                                },
                            ]}
                            name="targetGroup"
                            label="Target Group"
                            component={FormikSelectInput}
                        />
                    </GridItem>
                </>
            )
        }
    }

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues[type]}
            //validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
                switch (type) {
                    case 'course': {
                        let lectureIds = []

                        const createLectures = async () => {
                            for (const lecture of values.lectures) {
                                try {
                                    const response = await createLecture({
                                        variables: { data: lecture },
                                    })

                                    lectureIds.push(
                                        response.data.createLecture._id,
                                    )
                                } catch (e) {
                                    console.log(e)
                                }
                            }
                        }

                        await createLectures()

                        values.price = parseInt(values.price)
                        values.classDuration = parseInt(values.classDuration)
                        values.lectures = [...lectureIds]
                        values.licenced =
                            values.licenced === 'true' ? true : false
                        try {
                            const response = await createProduct({
                                variables: { data: values },
                            })
                            return history.push('/products')
                        } catch (e) {
                            console.log(e)
                        }
                        break
                    }
                    default: {
                        break
                    }
                }
            }}
            render={({ handleSubmit, isSubmitting, setFieldValue, values }) => (
                <Card className={c.card}>
                    <form onSubmit={handleSubmit}>
                        <Card.Header
                            style={{
                                margin: '-20px -20px 0 0',
                            }}
                            color="primary"
                            icon
                        >
                            <Card.Icon color="primary">
                                <SupervisorAccount />
                            </Card.Icon>
                            <h3
                                style={{ color: 'black' }}
                                className={c.title}
                            >{`Add new product`}</h3>
                        </Card.Header>
                        <div className={c.content}>
                            <GridContainer justify="flex-start">
                                <GridItem xs={12} sm={3}>
                                    <Field
                                        options={[
                                            {
                                                label: 'Course',
                                                value: 'course',
                                            },
                                            {
                                                label: 'Class',
                                                value: 'class',
                                            },
                                            {
                                                label: 'Addon',
                                                value: 'addon',
                                            },
                                        ]}
                                        onChange={e => setType(e.target.value)}
                                        value={type}
                                        name="type"
                                        label="Type"
                                        component={FormikSelectInput}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="name"
                                        label="Name"
                                        component={FormikTextInput}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={3}>
                                    <Field
                                        required
                                        name="price"
                                        label="Price"
                                        component={FormikTextInput}
                                    />
                                </GridItem>

                                <GridItem xs={12}>
                                    <Field
                                        required
                                        name="description"
                                        label="Description"
                                        component={FormikTextInput}
                                        multiline
                                    />
                                </GridItem>
                                {renderCourseAndClassFields()}
                                {renderCourseFields(
                                    setFieldValue,
                                    values.lectures,
                                )}
                                {renderClassFields()}
                                {renderAddonFields()}
                            </GridContainer>
                        </div>
                        <div className={c.footer}>
                            <GridContainer justify="flex-end">
                                <Button
                                    className={c.button}
                                    color="primary"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Add Product
                                </Button>
                            </GridContainer>
                        </div>
                    </form>
                </Card>
            )}
        />
    )
}

export default withStyles(style)(AddUserForm)
