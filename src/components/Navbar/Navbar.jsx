import React from 'react'
import Container from '../Layout/Container'

const Navbar = () => {
  return (
   <div className='bg-primary'>
    <Container>
    <div className='flex justify-between py-[27px]'>
        <div>
            <h1 className='text-[#FEFEFE] text-[25px] font-bold'>FIONA <span className='text-lightyellow text-[18px] font-semibold'>Ahmed</span></h1>
        </div>
        <div>
            <ul className='flex gap-10 font-dm'>
                <li className='text-[#FEFEFE] text-[18px] hover:text-lightyellow font-bold'>Home</li>
                <li className='text-[#FEFEFE] text-[18px] hover:text-lightyellow font-bold'>About</li>
                <li className='text-[#FEFEFE] text-[18px] hover:text-lightyellow font-bold'>Services</li>
                <li className='text-[#FEFEFE] text-[18px] hover:text-lightyellow font-bold'>My Work</li>
                <li className='text-[#FEFEFE] text-[18px] hover:text-lightyellow font-bold'>Contact Me</li>
            </ul>
        </div>
    </div>
   </Container>
   </div>
  )
}

export default Navbar