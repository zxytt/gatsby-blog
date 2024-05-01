// 左侧侧边栏
import React from 'react'
import { Link } from 'gatsby'
import Info from '../Info'
import config from '../../../content/meta/config'
import avatar from '../../assets/images/avatar.png'


const Sidebar = () => {
  return (
    <aside className="relative w-80 px-10 my-5 border-r">
      <header className="flex flex-col items-center">
        <Link to="/" title="首页">
          <img src={avatar} alt="" className="w-20 border rounded-full" />
        </Link>
        <div className="flex flex-col items-center mt-2">
          <span className="text-xl">{config.author}</span>
        </div>
      </header>
      <main className='absolute top-36 left-10 bottom-5 right-10'>
        <Info />
      </main>
    </aside>
  )
}

export default Sidebar