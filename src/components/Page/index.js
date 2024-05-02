import React, { useState, useEffect } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import config from '../../../content/meta/config'
import timeIcon from '../../assets/icons/time.svg'
import AV from "leancloud-storage/core"

AV.init({
  appId: "EdrgOXUYlV1CrT5os2ok7xVT-MdYXbMMI",
  appKey: "ug08gczbBytHuZY8xW6KNEUk",
  serverURL: "https://my-blog-mu-pied.vercel.app/",
});

const tagStyle = (index) => {
  return {
    background: config.colors[index],
    color: "#ffffff"
  }
}

const Page = () => {
  const [tag, setTag] = useState('')
  const result = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            date
            slug
            title
            tags
            cover {
              publicURL
            }
          }
          id
        }
      }
    }
  `)
  const tagList = data => {
    return data.map((item, index) => {
      return (
        <span key={index} onClick={(e) => {
          e.preventDefault()
          // filterTagFn(item)
        }} className="inline-block px-2 pb-px mr-3 text-sm rounded-md cursor-pointer" style={tagStyle(index)}>{item}</span>
      )
    })
  }
  const filterTagFn = val => {
    if(val !== tag) {
      setTag(val)
    } else {
      setTag('')
    }
  }
  const pageList = result.allMarkdownRemark.nodes.map((node, index) => {
    const { title, date, slug, cover, tags } = node.frontmatter
    const { publicURL } = cover
    if(!tag || tags.indexOf(tag) != -1) {
      return (
        <Link to={`/${slug}`} key={node.id}>
          <li className="py-5 px-5 mx-10 mb-5 transition ease-in-out delay-150 duration-300 rounded-3xl hover:-translate-y-1 hover:scale-105 hover:bg-gradient-to-l from-slate-300 to-slate-100 hover:shadow-xl">
            <div className="inline-block mr-5">
              <img src={publicURL} className="rounded-full w-24" />
            </div>
            <div className="inline-block">
              <h1>{title}</h1>
              <div className="mt-2">
                {tagList(tags)}
              </div>
              <div className="flex mt-2">
                <div className="flex items-center">
                  <img src={timeIcon} className="w-5 mr-2" />
                  <span className="text-xs">发布于：{date}</span>
                </div>
                <div className="flex items-center ml-5">
                  <span className="text-xs">访问量：1231</span>
                </div>
              </div>
            </div>
          </li>
        </Link>
      )
    }
  })
  return (
    <ul>
      {pageList}
    </ul>
  )
}

export default Page

