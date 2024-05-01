import React from 'react'
import Giscus from '@giscus/react'

const Comment = () => {
  return (
    <Giscus
      id="comments"
      repo="zxytt/gatsby-blog"
      repoId="R_kgDOL1kD9w"
      category="General"
      categoryId="DIC_kwDOL1kD984CfD0r"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="zh-CN"
      loading="lazy"
    />
  )
}

export default Comment
