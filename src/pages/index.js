import React from 'react'
import Layout from '../components/Layout'
import Page from '../components/Page'

const IndexPage = ({ pageContext }) => {
  const { pageData } = pageContext;
  console.log('pageData', pageData);
  return (
    <Layout>
      <Page />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
