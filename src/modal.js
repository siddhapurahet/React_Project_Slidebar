import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {useGlobally } from './context'

const Modal = () => {

  const {ismodalopen, closemodal} = useGlobally();


  return ( 
  <div className={`${ismodalopen?'modal-overlay show-modal':'modal-overlay'}`}>
    <div className='modal-container'>
      <h3>modal content</h3>
      <button className='close-modal-btn' onClick={closemodal}>
        <FaTimes/>
      </button>
    </div>
  </div>
  )
}

export default Modal