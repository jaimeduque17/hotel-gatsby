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

    // console.log(information.allDatoCmsPage.nodes[0])

    const { title, content, image } = information.allDatoCmsPage.nodes[0]

    return (
        <>
            <h2>{title}</h2>
            <div>
                <p>{content}</p>
                <img src={image.fluid.src} alt="" />
            </div>
        </>
    )
}

export default ContentHome