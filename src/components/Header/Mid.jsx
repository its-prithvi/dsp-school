import React from 'react'

function Mid() {
  return (
    <div className='header__mid h-[5vh] bg-primary flex justify-center items-center '>
        <nav className='flex w-[100%] max-w-[1280px]'>
        <ul className="navs flex w-[100%] justify-evenly text-white font-bold text-lg ">
            <li className='cursor-pointer hover:text-link' >Home</li>
            <li className='cursor-pointer hover:text-link' >Our School</li>
            <li className='cursor-pointer hover:text-link' >News</li>
            <li className='cursor-pointer hover:text-link' >Parents</li>
            <li className='cursor-pointer hover:text-link' >About</li>
            <li className='cursor-pointer hover:text-link' >Contact</li>
        </ul>
        </nav>

    </div>
  )
}

export default Mid