import React from 'react'
import Container from '../Layout/Container'

const Navbar = () => {
  return (
   <div className='fixed top-0 left-0 bg-primary inset-x-0 z-10'>
    <Container>
    <div className='flex justify-between py-[27px]'>
        <div>
            <h1 className='text-[#FEFEFE] text-[25px] font-bold'>FIONA <span className='text-lightyellow text-[18px] font-semibold'>Ahmed</span></h1>
        </div>
        <div>
            <ul className='flex gap-10 font-dm'>
                <li className='text-[#FEFEFE] text-[18px] hover:text-lightyellow font-bold'><a href="#home">Home</a></li>
                <li className='text-[#FEFEFE] text-[18px] hover:text-lightyellow font-bold'><a href="#aboutme">About</a></li>
                <li className='text-[#FEFEFE] text-[18px] hover:text-lightyellow font-bold'><a href="#service">Services</a></li>
                <li className='text-[#FEFEFE] text-[18px] hover:text-lightyellow font-bold'><a href="#mywork">My Work</a></li>
                <li className='text-[#FEFEFE] text-[18px] hover:text-lightyellow font-bold'><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
    </div>
   </Container>
   </div>
  )
}

export default Navbar