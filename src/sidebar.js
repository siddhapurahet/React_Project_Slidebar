import React from 'react'
import logo from './logo.png'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobally } from './context'

const Sidebar = () => {

const {issidebaropen, closesidebar} = useGlobally()

  return (
  <aside className={`${issidebaropen ? 'sidebar show-sidebar' : 'sidebar'}`}>
    <div className="sidebar-header">
      <img src={logo} alt="logo" className='logo' />
      <button className='close-btn' onClick={closesidebar}>
        <FaTimes/> 
      </button>
    </div>
    <ul className='links'>
      {links.map((singlelink) => {
        const {id, url, text, icon} = singlelink;
        return (
        <li key={id}>
          <a href={url}>
            {icon}
            {text}
          </a>
        </li>
        )
      })}
    </ul>
    <ul className='social-icons'>
      {social.map((singleitem) => {
        const {id, url, icon} = singleitem;
        return (
          <li key={id}>
             <a href={url}>
              {icon}
            </a>
          </li>
        )
      })}
    </ul>
  </aside>
  )
} 

export default Sidebar