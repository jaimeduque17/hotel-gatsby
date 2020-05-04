import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!) {
        allDatoCmsRoom(filter: { slug: { eq: $slug } }) {
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
`

const RoomTemplate = ({ data: { allDatoCmsRoom: { nodes } } }) => {

    const { title, content, image } = nodes[0]

    return (
        <Layout>
            <main>
                <h1>{title}</h1>
                <p>{content}</p>
                <Image 
                    fluid={image.fluid}
                />
            </main>
        </Layout>
    )
}

export default RoomTemplate