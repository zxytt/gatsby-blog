import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Comment from '../components/Comment'
import directoryIcon from '../assets/icons/directory.svg' 
import { pageviewCount } from '@waline/client'

const SlugPage = ({ pageContext }) => {
  const { html, slug, directory } = pageContext
  pageviewCount({
    serverURL: 'https://gatsby-blog-waline.vercel.app/',
    path: window.location.pathname,
    update: true
  })
  return (
    <Layout >
      <div className="relative mx-10 css-toc">
        <div className="absolute left-28">
          阅读量: <span className="waline-pageview-count" path={slug} />
          <article id="article" className="mb-10 prose" dangerouslySetInnerHTML={{ __html: html }} />
          <Comment />
        </div>
        <div className="fixed right-28 overflow-hidden">
          <div className="flex">
            <img src={directoryIcon} alt="" className="w-5" />
            <h2 className="ml-2">目录</h2>
          </div>
          <aside className="border-l-2 prose" dangerouslySetInnerHTML={{ __html: directory }}/>
          <div id="waline" />
        </div>
      </div>
    </Layout>
  )
}

export default SlugPage

export async function config() {
  return ({ params }) => {
    return {
      defer: true
    }
  }
}