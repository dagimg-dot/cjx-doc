import React from 'react'
import { FaBars } from 'react-icons/fa'
const Hamburger = ({onClick}) => {
  return (
    <div className='hidden mdsm:block'>
    <FaBars className='text-2xl text-lime-500 mx-5 my-10' onClick={onClick}/>
    </div>
  )
}

export default Hamburger