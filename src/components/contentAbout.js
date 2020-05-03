import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const ContentAbout = () => {

    const information = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter: {slug: {eq: "about"}}) {
                nodes {
                    title
                    content
                    image {
                        fluid(maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)

    const { title, content, image } = information.allDatoCmsPage.nodes[0]

    return (
        <>
        <h2>{title}</h2>
        <div>
            <p>{content}</p>
            <Image fluid={image.fluid} alt="" />
        </div>
        </>
    )
}

export default ContentAbout