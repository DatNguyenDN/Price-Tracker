import React from 'react'
import logo from '../Assets/logo.png'
import Nav from '../Components/Navbar/Nav'
const Header = () => {
  return (
    <header className='bg-[--bgc] p-5 sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500  font-poppin font-bold uppercase text-primary backdrop-blur-[100px]'>
      
      <img src={logo} alt='logo'/>
      <Nav/>
     
    </header>
  )
}

export default Header