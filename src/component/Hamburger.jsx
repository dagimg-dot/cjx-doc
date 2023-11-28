import React from 'react'
import { FaBars } from 'react-icons/fa'
const Hamburger = ({onClick}) => {
  return (
    <>
    <FaBars className='text-2xl text-white' onClick={onClick}/>
    </>
  )
}

export default Hamburger