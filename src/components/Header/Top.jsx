import React from 'react'
import mainLogo from '../../Asset/newLogo.png'; 
import { FaSearch } from 'react-icons/fa';
function Top() {
  return (
    <div className='header   flex md:flex-row items-center flex-col  md:items-center md:justify-evenly'>
    <div className="header__left h-[100%] flex md:w-40 w-20 m-5 justify-center items-center">
        <img  src={mainLogo} alt="" />
        <div className="header__text text-left">
            <h1 className='text-red-500 font-bold text-[2rem]' >DNYANYOG</h1>
            <p  className='text-red-500 font-bold'>Shikshan Prasarak Mandal Jalna</p>
        </div>
    </div>
    <div className="header__right flex md:w-auto w-[100%] p-5 text-white ">
        <input className='rounded-3xl grow bg-slate-100 placeholder:text-center text-center text-black' placeholder='Search Website'  type="text" />
        <button className='bg-primary p-4 ml-[-35px] rounded-3xl'><FaSearch ></FaSearch></button> 
    </div>
</div>
  )
}

export default Top