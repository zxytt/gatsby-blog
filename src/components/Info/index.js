import React from 'react'
import config from '../../../content/meta/config'
import GatsbyIcon from '../../assets/icons/gatsby.svg'
import ReactIcon from '../../assets/icons/react.svg'
import GraphQLIcon from '../../assets/icons/graphql.svg'
import TailwindCSSIcon from '../../assets/icons/tailwindcss.svg'
import VercelIcon from '../../assets/icons/vercel.svg'

const buildIcons = {
  Gatsby: GatsbyIcon,
  React: ReactIcon,
  GraphQL: GraphQLIcon,
  TailwindCSS: TailwindCSSIcon,
  Vercel: VercelIcon,
}

const createIconLinks = (icons, links) => {
  return links.map(link => {
    const iconUrl = icons[link.name]
    return (
      <li key={link.name}>
        <a href={link.url} target="_blank" rel="noreferrer">
          <img src={iconUrl} alt={link.name} className="w-7"/>
        </a>
      </li>
    )
  })
}

const Info = () => {
  return (
    <div className='flex flex-col flex-1'>
      <div>
        <p className='mb-5 text-center'>{config.introduction}</p>
        <ul className="flex flex-row justify-evenly items-center">
        </ul>
      </div>
      <div className='absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center'>
        <ul className="flex justify-evenly w-full">
          {createIconLinks(buildIcons, config.buildWith)}
        </ul>
      </div>
    </div>
  )
}

export default Info