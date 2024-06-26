/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // 查询数据
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          html
          frontmatter {
            slug
            title
            date  
          }
          tableOfContents
        }
      }
    }
  `)
  console.log('result', result);

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    const { id, html, tableOfContents } = node
    const { slug, title, date } = node.frontmatter
    createPage({
      path: `/${slug}`,
      component: path.resolve(`./src/pages/[slug].js`),
      context: {
        id,
        html,
        slug,
        title,
        date,
        directory: tableOfContents
      }
    })
  })
}
