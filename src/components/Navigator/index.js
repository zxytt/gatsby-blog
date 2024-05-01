// 右侧导航
import React from 'react'
import { Link } from 'gatsby'
import home from '../../assets/icons/home.svg'
import search from '../../assets/icons/search.svg'
import toTop from '../../assets/icons/to-top.svg'
import gitHubIcon from '../../assets/icons/github.svg'

const scrollTop = () => {
  const wrapper = document.getElementsByClassName('main-wrapper')[0]
  if(wrapper.scrollTop > 0) {
    wrapper.scrollTop = 0
  }
}

const Navigator = () => {
  return (
    <div className='w-16 flex flex-col items-center justify-between my-5 border-l'>
      <div>
        <div className="w-14 h-14 flex items-center justify-center rounded-full cursor-pointer hover:bg-slate-200">
          <Link to="/" title="首页">
            <img src={home} alt="" className="w-6" />
          </Link>
        </div>
        <div className="w-14 h-14 flex items-center justify-center rounded-full cursor-pointer hover:bg-slate-200">
          <a href='https://github.com/zxytt/gatsby-blog' target='__blank'>
            <img src={gitHubIcon} alt="" className="w-6" />
          </a>
        </div>
        <div className="w-14 h-14 flex items-center justify-center rounded-full cursor-pointer hover:bg-slate-200">
          <img src={search} alt="" className="w-6" />
        </div>
      </div>
      <div className="w-14 h-14 flex items-center justify-center rounded-full cursor-pointer -rotate-45 hover:bg-slate-200" onClick={scrollTop} >
        <img src={toTop} alt="" className="w-6" />
      </div>
    </div>
  )
}

export default Navigator