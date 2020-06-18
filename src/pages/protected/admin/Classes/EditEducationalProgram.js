import React from 'react'

import EditForm from '@forms/EducationalProgram/EditEducatonalProgramForm'

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

const EditEducationalProgramPage = ({
    type = 'edit',
    //	educationalProgram,
    history,
}) => {
    return (
        <>
            <EditForm history={history} educationalProgram={program} />
        </>
    )
}

export default EditEducationalProgramPage
