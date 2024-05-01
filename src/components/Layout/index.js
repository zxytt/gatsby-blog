import React from 'react'
import Sidebar from '../Sidebar'
import Navigator from '../Navigator'

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 my-10 overflow-y-scroll scroll-smooth main-wrapper">{children}</main>
      <Navigator />
    </div>
  )
}

export default Layout