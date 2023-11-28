import React from 'react'
import { FaBars } from 'react-icons/fa'
const Hamburger = ({onClick}) => {
  return (
    <>
    <FaBars className='text-2xl text-lime-500 mx-5 my-10' onClick={onClick}/>
    </>
  )
}

export default Hamburger