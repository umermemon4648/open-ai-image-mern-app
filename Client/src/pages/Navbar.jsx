import React from 'react'
import { Link } from 'react-router-dom'
import Imglogo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <>
    <header className='w-full flex justify-between items-centers bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to={'/'}>
        <img src={Imglogo} alt="" className='w-28 object-cover' />
        </Link>
        <Link to={'/create-post'} className="font inter font-medium px-4 py-2 bg-[#6469ff] text-white rounded-md" >Create</Link>
    </header>
    </>
  )
}

export default Navbar
