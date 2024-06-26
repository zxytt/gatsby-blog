import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Comment from '../components/Comment'
import Count from '../components/Count'
import directoryIcon from '../assets/icons/directory.svg' 


const SlugPage = ({ pageContext }) => {
  const { html, slug, directory, title, } = pageContext
  return (
    <Layout >
      <div className="relative mx-10 css-toc">
        <div className="absolute left-28 right-48">
          <div>
          阅读量: <Count />
          </div>
          
          <article id="article" className="mb-10 prose" dangerouslySetInnerHTML={{ __html: html }} />
          <div className='w-3/4'>
            <Comment />
          </div>
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