import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { Appcontext, useGlobally } from './context'

const Home = () => {

  const {opensidebar, openmodal} = useGlobally();

  return ( 
  <main>
    <button className='sidebar-toggle' onClick={opensidebar}>
      <FaBars/>
    </button>
    <button className='btn' onClick={openmodal}>
      show modal
    </button>
  </main>

)}
 
export default Home