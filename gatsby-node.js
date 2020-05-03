exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allDatoCmsRoom {
                nodes {
                    slug
                }
            }
        }         
    `)

    // console.log(result.data.allDatoCmsRoom.nodes)

    if(result.errors) {
        reporter.panic(`There wasn't results`, result.errors)
    }

    // If there are pages create the files
    const rooms = result.data.allDatoCmsRoom.nodes

    rooms.forEach(room => {
        actions.createPage({
            path: room.slug,
            component: require.resolve('./src/components/rooms.js'),
            context: {
                slug: room.slug
            }
        })
    })
}