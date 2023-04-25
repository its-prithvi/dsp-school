import React from 'react'
import Top from './Header/Top';
import Mid from './Header/Mid';

function Header() {
  return (
    <div className='header bg-white'>
        <Top></Top>
        <Mid></Mid>
    </div>
  )
}

export default Header