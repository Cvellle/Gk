import React from 'react'

const Blog = props => {
    React.useEffect(() => {
        console.log('loaded')
    }, [])
    return (
        <>
            <div>Student Blog</div>
            <div>{JSON.stringify(props)}</div>
        </>
    )
}

export { Blog }
