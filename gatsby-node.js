const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const filePath = createFilePath({ node, getNode, basePath: `blogs` })
//     // --> blogs/create-post-with-gatsby/
//     const slug = `blogs${filePath}`

//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.fields.slug,
//         component: path.resolve(`./src/templates/blogPost.js`),
//         context: {
//           // Data passed to context is available
//           // in page queries as GraphQL variables.
//           slug: node.fields.slug,
//         },
//       })
//     })
//   })
// }
