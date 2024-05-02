import React, { useEffect } from 'react'
import { pageviewCount } from '@waline/client'

const Count = (props) => {
  const path = props.path || window.location.pathname
  useEffect(() => {
    pageviewCount({
      serverURL: 'https://gatsby-blog-waline.vercel.app/',
      path: path,
      update: !props.path
    })
  })
  return (
    <span className="waline-pageview-count" data-path={path}/>
  )
}

export default Count
