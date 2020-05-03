import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const ContentHome = () => {

    const information = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter: {slug: {eq: "home"}}) {
                nodes {
                    title
                    content
                    image {
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)

    console.log(information)

    return (
        <>
            <h2>Title</h2>
        </>
    )
}

export default ContentHome